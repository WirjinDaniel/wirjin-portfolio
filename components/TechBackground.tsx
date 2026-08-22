'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  alpha: number;
}

export default function TechBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let mouse = { x: 0, y: 0 };
    let particles: Particle[] = [];

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const initParticles = () => {
      particles = Array.from({ length: 55 }, () => ({
        x:     Math.random() * canvas.width,
        y:     Math.random() * canvas.height,
        vx:    (Math.random() - 0.5) * 0.28,
        vy:    (Math.random() - 0.5) * 0.28,
        r:     Math.random() * 1.6 + 0.4,
        alpha: Math.random() * 0.35 + 0.08,
      }));
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const drawGrid = () => {
      const step = 48;
      ctx.strokeStyle = 'rgba(38,51,74,0.55)';
      ctx.lineWidth = 0.5;

      for (let x = 0; x < canvas.width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    const drawRings = (t: number) => {
      const cx = canvas.width  * 0.62 + mouse.x * 0.012;
      const cy = canvas.height * 0.48 + mouse.y * 0.012;

      [180, 260, 340, 420].forEach((r, i) => {
        const pulse = 1 + Math.sin(t * 0.0007 + i * 0.9) * 0.018;
        ctx.beginPath();
        ctx.arc(cx, cy, r * pulse, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(79,111,174,${0.09 - i * 0.017})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Dashed accent ring
      ctx.save();
      ctx.setLineDash([4, 10]);
      ctx.beginPath();
      ctx.arc(cx, cy, 300 + Math.sin(t * 0.0005) * 8, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(124,92,191,0.07)';
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.restore();
    };

    const drawGlow = () => {
      const cx = canvas.width  * 0.62 + mouse.x * 0.015;
      const cy = canvas.height * 0.48 + mouse.y * 0.015;
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 380);
      grad.addColorStop(0,   'rgba(79,111,174,0.10)');
      grad.addColorStop(0.5, 'rgba(79,111,174,0.04)');
      grad.addColorStop(1,   'transparent');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const drawParticles = () => {
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(102,132,196,${p.alpha})`;
        ctx.fill();

        // Connect nearby particles
        particles.forEach((q) => {
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 90 && dist > 0) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(79,111,174,${0.08 * (1 - dist / 90)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
    };

    const updateParticles = () => {
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width)  p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });
    };

    const drawDots = () => {
      const step = 48;
      ctx.fillStyle = 'rgba(38,51,74,0.7)';
      for (let x = 0; x < canvas.width; x += step) {
        for (let y = 0; y < canvas.height; y += step) {
          ctx.beginPath();
          ctx.arc(x, y, 1, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    let t = 0;
    const draw = () => {
      t++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawGrid();
      drawDots();
      drawGlow();
      drawRings(t);
      drawParticles();
      updateParticles();
      animId = requestAnimationFrame(draw);
    };

    resize();
    initParticles();
    draw();

    const ro = new ResizeObserver(() => { resize(); initParticles(); });
    ro.observe(canvas);
    canvas.addEventListener('mousemove', onMouseMove);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
      canvas.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }}
    />
  );
}
