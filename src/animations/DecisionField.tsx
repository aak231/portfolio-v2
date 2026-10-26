import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseX: number;
  baseY: number;
};

const NODE_POOL_SIZE = 300;

/**
 * Constellation background, confined to its parent (the hero section).
 * Nothing here reads window during render, so it is safe to prerender.
 */
export default function DecisionField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const nodesRef = useRef<Node[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    if (!canvas || !parent) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let W = 0;
    let H = 0;
    let sized = false;
    let isMobile = false;
    let maxNodes = 300;
    let active = 100;
    let t = 0;
    let rafId = 0;
    let running = false;
    let lastTime = 0;
    const fps: number[] = [];
    const mouse = { x: -9999, y: -9999, vx: 0, vy: 0 };

    const nodes = nodesRef.current;

    const seedNodes = () => {
      if (nodes.length > 0) return;
      for (let i = 0; i < NODE_POOL_SIZE; i++) {
        const x = Math.random() * W;
        const y = Math.random() * H;
        nodes.push({ x, y, vx: 0, vy: 0, baseX: x, baseY: y });
      }
    };

    const step = () => {
      t += 0.01;
      mouse.vx *= 0.9;
      mouse.vy *= 0.9;
      const mouseSpeed = Math.hypot(mouse.vx, mouse.vy);

      for (let i = 0; i < active; i++) {
        const n = nodes[i];

        n.vx += Math.sin(n.y * 0.002 + t) * 0.02;
        n.vy += Math.cos(n.x * 0.002 + t) * 0.02;

        n.vx += (n.baseX - n.x) * 0.00015;
        n.vy += (n.baseY - n.y) * 0.00015;

        const mx = n.x - mouse.x;
        const my = n.y - mouse.y;
        const dist = Math.sqrt(mx * mx + my * my);

        if (dist < 180 && dist > 0.01) {
          const influence = (180 - dist) / 180;
          const flowStrength = Math.min(mouseSpeed * 0.02, 2);
          n.vx += -mouse.vy * influence * flowStrength * 0.02;
          n.vy += mouse.vx * influence * flowStrength * 0.02;
        }

        n.vx *= 0.9;
        n.vy *= 0.9;
        n.x += n.vx;
        n.y += n.vy;
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      const threshold = isMobile ? 60 : 80;
      const thresholdSq = threshold * threshold;

      ctx.fillStyle = "rgba(251,191,36,0.25)";
      for (let i = 0; i < active; i++) {
        ctx.beginPath();
        ctx.arc(nodes[i].x, nodes[i].y, 4, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.lineWidth = 1.2;
      for (let i = 0; i < active; i++) {
        for (let j = i + 1; j < active; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distSq = dx * dx + dy * dy;
          if (distSq < thresholdSq) {
            const proximity = 1 - Math.sqrt(distSq) / threshold;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(251,191,36,${0.1 + proximity * 0.22})`;
            ctx.stroke();
          }
        }
      }
    };

    const loop = (time: number) => {
      if (!running) return;
      const delta = lastTime ? time - lastTime : 0;
      lastTime = time;

      if (delta > 0) {
        fps.push(1000 / delta);
        if (fps.length > 30) fps.shift();
        const avg = fps.reduce((a, b) => a + b, 0) / fps.length;
        if (avg < 50 && active > 60) active -= 5;
        else if (avg > 58 && active < maxNodes) active += 2;
      }

      step();
      draw();
      rafId = requestAnimationFrame(loop);
    };

    const start = () => {
      if (running || reduced) return;
      running = true;
      lastTime = 0;
      rafId = requestAnimationFrame(loop);
    };

    const stop = () => {
      running = false;
      cancelAnimationFrame(rafId);
    };

    const resize = () => {
      const rect = parent.getBoundingClientRect();
      const nw = Math.max(1, Math.round(rect.width));
      const nh = Math.max(1, Math.round(rect.height));
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = nw * dpr;
      canvas.height = nh * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (nodes.length === 0) {
        W = nw;
        H = nh;
        seedNodes();
        if (reduced) {
          for (let i = 0; i < 120; i++) step();
        }
      } else if (W > 0 && H > 0) {
        const sx = nw / W;
        const sy = nh / H;
        for (const n of nodes) {
          n.x *= sx;
          n.y *= sy;
          n.baseX *= sx;
          n.baseY *= sy;
        }
      }
      W = nw;
      H = nh;

      const mobile = nw < 768;
      if (!sized || mobile !== isMobile) {
        sized = true;
        isMobile = mobile;
        maxNodes = mobile ? 120 : 300;
        active = mobile ? 60 : 100;
      }

      if (reduced) draw();
    };

    const onMove = (e: MouseEvent) => {
      const r = parent.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      if (mouse.x > -9000) {
        mouse.vx = x - mouse.x;
        mouse.vy = y - mouse.y;
      }
      mouse.x = x;
      mouse.y = y;
    };

    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
      mouse.vx = 0;
      mouse.vy = 0;
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(parent);
    resize();

    let intersection: IntersectionObserver | undefined;
    if (!reduced) {
      parent.addEventListener("mousemove", onMove);
      parent.addEventListener("mouseleave", onLeave);
      intersection = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) start();
        else stop();
      });
      intersection.observe(parent);
    }

    return () => {
      stop();
      resizeObserver.disconnect();
      intersection?.disconnect();
      parent.removeEventListener("mousemove", onMove);
      parent.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 h-full w-full [mask-image:linear-gradient(to_bottom,#000_70%,transparent)]"
    />
  );
}
