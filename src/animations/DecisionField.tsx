import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseX: number;
  baseY: number;
};
// Global config
const MAX_NODES = 300;

export default function DecisionField() {
  // React Refs
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  // persistent particle array
  const nodesRef = useRef<Node[]>([]);
  // dynamic particle count
  const activeCountRef = useRef<number>(100);
  // Rolling FPS samples
  const fpsRef = useRef<number[]>([]);
  // Stores previous animation timestamp
  const lastTimeRef = useRef<number>(0);

  useEffect(() => {
    // Canvas Setup
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      // Matches canvas to viewport
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    // Node Initialization once
    if (nodesRef.current.length === 0) {
      const nodes: Node[] = [];
      for (let i = 0; i < MAX_NODES; i++) {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        nodes.push({
          x,
          y,
          vx: 0,
          vy: 0,
          baseX: x,
          baseY: y,
        });
      }
      nodesRef.current = nodes;
    }
    // Mouse Tracking
    const mouse = { x: 0, y: 0, px: 0, py: 0 };

    window.addEventListener("mousemove", (e) => {
      mouse.px = mouse.x;
      mouse.py = mouse.y;
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });
    // Global time accumulator
    let t = 0;
    // Scroll Tracking
    let scrollProgress = 0;
    let lastScroll = window.scrollY;
    let scrollVelocity = 0;

    const updateScroll = () => {
      const current = window.scrollY;
      scrollVelocity = current - lastScroll;
      lastScroll = current;

      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      scrollProgress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
    };

    updateScroll();
    window.addEventListener("scroll", updateScroll);
    // Runs every frame via requestAnimationFrame
    // ------------------------------------------------------------------------------------------------------------
    // main loop
    const loop = (time: number) => {
      if (!ctx) return;

      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width,
      );

      gradient.addColorStop(0, "#242426");
      gradient.addColorStop(1, "#1a1a1c");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      // Creates slow evolving wave motion
      t += 0.01;

      // Computes movement speed
      const mouseVX = mouse.x - mouse.px;
      const mouseVY = mouse.y - mouse.py;
      const mouseSpeed = Math.sqrt(mouseVX * mouseVX + mouseVY * mouseVY);
      // Measures frame rate
      const delta = time - (lastTimeRef.current || time);
      lastTimeRef.current = time;

      const fps = 1000 / delta;
      fpsRef.current.push(fps);
      if (fpsRef.current.length > 30) fpsRef.current.shift();

      const avgFps =
        fpsRef.current.reduce((a, b) => a + b, 0) / fpsRef.current.length;

      // live adaptation
      // This prevents:
      // •	Overloading weak devices
      // •	Underutilizing powerful ones

      if (avgFps < 50 && activeCountRef.current > 60) {
        activeCountRef.current -= 5;
      } else if (avgFps > 58 && activeCountRef.current < MAX_NODES) {
        activeCountRef.current += 2;
      }
      // Erases previous frame
      // ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Scroll Based Complexity
      const complexity = Math.min(scrollProgress * 1.2, 1);

      // Connection distance grows with scroll
      const dynamicThreshold = 80 + complexity * 100;
      const dynamicThresholdSq = dynamicThreshold * dynamicThreshold;

      // Vertical compression strength
      const compressionStrength = complexity * 0.0006;
      const nodes = nodesRef.current;

      // --- PARTICLE UPDATE LOOP (O(n)) ---
      for (let i = 0; i < activeCountRef.current; i++) {
        const n = nodes[i];

        // This creates smooth, continuous vector flow
        n.vx += Math.sin(n.y * 0.002 + t) * 0.02;
        n.vy += Math.cos(n.x * 0.002 + t) * 0.02;

        const speed = Math.sqrt(n.vx * n.vx + n.vy * n.vy);
        const glow = Math.min(speed * 4, 1);

        // Anchor pull
        // This pulls particles back toward origin
        const dx = n.baseX - n.x;
        const dy = n.baseY - n.y;

        n.vx += dx * 0.00015;
        n.vy += dy * 0.00015;

        // scroll physics
        scrollVelocity *= 0.9; // decay
        n.vy += scrollVelocity * 0.01;
        // Vertical compression toward center
        const centerY = canvas.height / 2;
        const compressForce = (centerY - n.y) * compressionStrength;
        n.vy += compressForce;

        // Mouse influence
        const mx = n.x - mouse.x;
        const my = n.y - mouse.y;
        const dist = Math.sqrt(mx * mx + my * my);

        // radius of influence
        if (dist < 180 && dist > 0.01) {
          const influence = (180 - dist) / 180;

          // Tangential force (perpendicular to mouse direction)
          const flowX = -mouseVY;
          const flowY = mouseVX;

          const flowStrength = Math.min(mouseSpeed * 0.02, 2);

          n.vx += flowX * influence * flowStrength * 0.02;
          n.vy += flowY * influence * flowStrength * 0.02;
        }

        // simulates friction
        n.vx *= 0.9;
        n.vy *= 0.9;

        // Velocity integration
        n.x += n.vx;
        n.y += n.vy;

        // Rendering
        ctx.beginPath();
        ctx.arc(n.x, n.y, 4, 0, Math.PI * 2);
        // ctx.fillStyle = `rgba(251,191,36,${0.3 + glow * 0.7})`;
        ctx.fillStyle = `rgba(251,191,36,${0.25 + glow * 0.6})`;
        ctx.fill();
      }

      // --- CONNECTION LOOP (O(n²)) ---
      for (let i = 0; i < activeCountRef.current; i++) {
        for (let j = i + 1; j < activeCountRef.current; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distSq = dx * dx + dy * dy;

          const threshold = 100;
          const thresholdSq = threshold * threshold;

          if (distSq < dynamicThresholdSq) {
            const dist = Math.sqrt(distSq);
            const proximity = 1 - dist / dynamicThreshold;

            // --- Base Line ---
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);

            ctx.strokeStyle = `rgba(251,191,36,${0.12 + proximity * 0.18})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();

            // --- Soft Glow Overlay ---
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);

            ctx.strokeStyle = `rgba(251,191,36,${proximity * 0.25})`;
            ctx.lineWidth = 3;
            ctx.stroke();
          }
        }
      }

      // Frame Recursion
      requestAnimationFrame(loop);
    };

    requestAnimationFrame(loop); // initial start

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0" />;
}
