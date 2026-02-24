import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseX: number;
  baseY: number;
};

const isMobile = window.innerWidth < 768;
const MAX_NODES = isMobile ? 120 : 300;

export default function DecisionField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const nodesRef = useRef<Node[]>([]);
  const activeCountRef = useRef<number>(window.innerWidth < 768 ? 60 : 100);
  const fpsRef = useRef<number[]>([]);
  const lastTimeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

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

    const mouse = { x: 0, y: 0, px: 0, py: 0 };

    window.addEventListener("mousemove", (e) => {
      mouse.px = mouse.x;
      mouse.py = mouse.y;
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    let t = 0;
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
    const loop = (time: number) => {
      if (!ctx) return;

      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height * 0.35,
        0,
        canvas.width / 2,
        canvas.height * 0.35,
        canvas.width,
      );

      gradient.addColorStop(0, "#19191b");
      gradient.addColorStop(0.7, "#121214");
      gradient.addColorStop(1, "#0a0a0d");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      t += 0.01;

      const mouseVX = mouse.x - mouse.px;
      const mouseVY = mouse.y - mouse.py;
      const mouseSpeed = Math.sqrt(mouseVX * mouseVX + mouseVY * mouseVY);

      const delta = time - (lastTimeRef.current || time);
      lastTimeRef.current = time;

      const fps = 1000 / delta;
      fpsRef.current.push(fps);
      if (fpsRef.current.length > 30) fpsRef.current.shift();

      const avgFps =
        fpsRef.current.reduce((a, b) => a + b, 0) / fpsRef.current.length;

      if (avgFps < 50 && activeCountRef.current > 60) {
        activeCountRef.current -= 5;
      } else if (avgFps > 58 && activeCountRef.current < MAX_NODES) {
        activeCountRef.current += 2;
      }
      // ------------------------------------------------
      // LINEAR SCROLL COMPRESSION (CAPPED + TUNABLE)
      // ------------------------------------------------

      // Master compression amount (0 to 1)
      // 0.4 = 40% compression
      // 0.5 = 50% compression
      const MAX_COMPRESSION = 0.25;

      // How fast compression responds to scroll
      // 1 = perfectly linear
      // 0.8 = slower response
      // 1.2 = slightly stronger response
      const COMPRESSION_RESPONSE = 0.8;

      // Linear mapping
      let compression = scrollProgress * scrollProgress * COMPRESSION_RESPONSE;

      // Clamp to maximum compression
      compression = Math.min(compression, MAX_COMPRESSION);

      const baseThreshold = isMobile ? 60 : 80;
      const dynamicThreshold =
        baseThreshold + compression * (isMobile ? 80 : 120);
      const dynamicThresholdSq = dynamicThreshold * dynamicThreshold;

      const compressionStrength = compression * 0.0004;

      const nodes = nodesRef.current;

      for (let i = 0; i < activeCountRef.current; i++) {
        const n = nodes[i];

        n.vx += Math.sin(n.y * 0.002 + t) * 0.02;
        n.vy += Math.cos(n.x * 0.002 + t) * 0.02;

        const dx = n.baseX - n.x;
        const dy = n.baseY - n.y;

        n.vx += dx * 0.00015;
        n.vy += dy * 0.00015;

        scrollVelocity *= 0.9;
        n.vy += scrollVelocity * 0.01;

        // Vertical compression
        const centerY = canvas.height / 2;
        const compressForce = (centerY - n.y) * compressionStrength;
        n.vy += compressForce;

        const mx = n.x - mouse.x;
        const my = n.y - mouse.y;
        const dist = Math.sqrt(mx * mx + my * my);

        if (dist < 180 && dist > 0.01) {
          const influence = (180 - dist) / 180;
          const flowX = -mouseVY;
          const flowY = mouseVX;
          const flowStrength = Math.min(mouseSpeed * 0.02, 2);

          n.vx += flowX * influence * flowStrength * 0.02;
          n.vy += flowY * influence * flowStrength * 0.02;
        }

        n.vx *= 0.9;
        n.vy *= 0.9;

        n.x += n.vx;
        n.y += n.vy;

        ctx.beginPath();
        ctx.arc(n.x, n.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(251,191,36,0.25)`;
        ctx.fill();
      }

      for (let i = 0; i < activeCountRef.current; i++) {
        for (let j = i + 1; j < activeCountRef.current; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distSq = dx * dx + dy * dy;

          if (distSq < dynamicThresholdSq) {
            const dist = Math.sqrt(distSq);
            const proximity = 1 - dist / dynamicThreshold;

            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);

            ctx.strokeStyle = `rgba(251,191,36,${0.1 + proximity * 0.22})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(loop);
    };;

    requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0" />;
}
