import { useEffect, useRef } from "react";

type Orb = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  glow: number;
  fade: number;
  phase: "spawning" | "alive" | "retiring";
  life: number;
  lifespan: number;
};

const MIN_COUNT = 4;
const MAX_COUNT = 7;

function randomBetween(min: number, max: number) {
  return min + Math.random() * (max - min);
}

function drawOrb(ctx: CanvasRenderingContext2D, orb: Orb) {
  const baseAlpha = 0.14;
  const glowBoost = 0.45;
  const alpha = Math.min(1, baseAlpha + orb.glow * glowBoost) * orb.fade;
  if (alpha <= 0.002) return;

  const gradient = ctx.createRadialGradient(
    orb.x,
    orb.y,
    0,
    orb.x,
    orb.y,
    orb.radius,
  );
  gradient.addColorStop(0, `rgba(251,191,36,${alpha})`);
  gradient.addColorStop(0.4, `rgba(251,191,36,${alpha * 0.35})`);
  gradient.addColorStop(1, "rgba(251,191,36,0)");

  ctx.beginPath();
  ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
  ctx.fillStyle = gradient;
  ctx.fill();
}

export default function SystemsField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const orbsRef = useRef<Orb[]>([]);
  const isMobileRef = useRef<boolean>(window.innerWidth < 768);
  const targetCountRef = useRef<number>(0);
  const rafIdRef = useRef<number>(0);
  const lastTargetChangeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const getRadiusRange = (): [number, number] =>
      isMobileRef.current ? [30, 90] : [50, 150];
    const getMaxSpeed = () => (isMobileRef.current ? 0.15 : 0.25);

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      isMobileRef.current = window.innerWidth < 768;
    };
    resize();
    window.addEventListener("resize", resize);

    const createOrb = (spawning: boolean): Orb => {
      const [minR, maxR] = getRadiusRange();
      const radius = randomBetween(minR, maxR);
      const maxSpeed = getMaxSpeed();
      // Pick direction + magnitude separately (not independent vx/vy) so every
      // orb gets a guaranteed minimum speed — randomizing vx/vy independently
      // could land near (0,0), leaving an orb visibly frozen until a collision
      // impulse kicked it into motion.
      const angle = Math.random() * Math.PI * 2;
      const speed = randomBetween(maxSpeed * 0.5, maxSpeed);
      return {
        x: randomBetween(radius, Math.max(radius, canvas.width - radius)),
        y: randomBetween(radius, Math.max(radius, canvas.height - radius)),
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        radius,
        glow: 0,
        fade: spawning ? 0 : 1,
        phase: spawning ? "spawning" : "alive",
        life: 0,
        lifespan: randomBetween(10000, 25000),
      };
    };

    if (orbsRef.current.length === 0) {
      const initialCount =
        MIN_COUNT + Math.floor(Math.random() * (MAX_COUNT - MIN_COUNT + 1));
      targetCountRef.current = initialCount;
      orbsRef.current = Array.from({ length: initialCount }, () =>
        createOrb(false),
      );
    }

    if (prefersReducedMotion) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const orb of orbsRef.current) drawOrb(ctx, orb);
      return () => {
        window.removeEventListener("resize", resize);
      };
    }

    let lastTime = 0;

    const loop = (time: number) => {
      const rawDelta = lastTime ? time - lastTime : 16.6667;
      lastTime = time;
      const delta = Math.min(rawDelta, 50);
      const dt = delta / 16.6667;

      if (
        lastTargetChangeRef.current === 0 ||
        time - lastTargetChangeRef.current > randomBetween(15000, 25000)
      ) {
        lastTargetChangeRef.current = time;
        const step = Math.random() < 0.5 ? -1 : 1;
        targetCountRef.current = Math.min(
          MAX_COUNT,
          Math.max(MIN_COUNT, targetCountRef.current + step),
        );
      }

      const orbs = orbsRef.current;

      if (orbs.length < targetCountRef.current) {
        orbs.push(createOrb(true));
      }

      for (let i = 0; i < orbs.length; i++) {
        const o = orbs[i];
        o.life += delta;

        if (o.phase === "spawning") {
          o.fade += (1 - o.fade) * 0.05 * dt;
          if (o.fade > 0.98) {
            o.fade = 1;
            o.phase = "alive";
          }
        } else if (o.phase === "retiring") {
          o.fade += (0 - o.fade) * 0.05 * dt;
        } else if (o.life > o.lifespan) {
          o.phase = "retiring";
        }

        o.x += o.vx * dt;
        o.y += o.vy * dt;

        let bounced = false;
        if (o.x - o.radius < 0) {
          o.x = o.radius;
          o.vx = Math.abs(o.vx);
          bounced = true;
        } else if (o.x + o.radius > canvas.width) {
          o.x = canvas.width - o.radius;
          o.vx = -Math.abs(o.vx);
          bounced = true;
        }
        if (o.y - o.radius < 0) {
          o.y = o.radius;
          o.vy = Math.abs(o.vy);
          bounced = true;
        } else if (o.y + o.radius > canvas.height) {
          o.y = canvas.height - o.radius;
          o.vy = -Math.abs(o.vy);
          bounced = true;
        }
        if (bounced) o.glow = 1;

        o.glow += (0 - o.glow) * 0.07 * dt;
      }

      for (let i = 0; i < orbs.length; i++) {
        for (let j = i + 1; j < orbs.length; j++) {
          const a = orbs[i];
          const b = orbs[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const distSq = dx * dx + dy * dy;
          const minDist = a.radius + b.radius;

          if (distSq < minDist * minDist && distSq > 0.0001) {
            const dist = Math.sqrt(distSq);
            const nx = dx / dist;
            const ny = dy / dist;
            const rvn = (b.vx - a.vx) * nx + (b.vy - a.vy) * ny;

            if (rvn < 0) {
              a.vx += rvn * nx;
              a.vy += rvn * ny;
              b.vx -= rvn * nx;
              b.vy -= rvn * ny;
              a.glow = 1;
              b.glow = 1;
            }

            const overlap = minDist - dist;
            const correction = overlap / 2;
            a.x -= nx * correction;
            a.y -= ny * correction;
            b.x += nx * correction;
            b.y += ny * correction;
          }
        }
      }

      for (let i = orbs.length - 1; i >= 0; i--) {
        if (orbs[i].phase === "retiring" && orbs[i].fade < 0.02) {
          if (orbs.length > targetCountRef.current) {
            orbs.splice(i, 1);
          } else {
            orbs[i] = createOrb(true);
          }
        }
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const orb of orbs) drawOrb(ctx, orb);

      rafIdRef.current = requestAnimationFrame(loop);
    };

    rafIdRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafIdRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0" />;
}
