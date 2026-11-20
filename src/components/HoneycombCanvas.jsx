import React, { useEffect, useRef } from 'react';

export default function HoneycombCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const parent = canvas.parentElement;

    let width = 0;
    let height = 0;
    let animId = null;
    const mouse = { x: -999, y: -999 };
    const particles = [];

    const resize = () => {
      width = canvas.width = parent.offsetWidth;
      height = canvas.height = parent.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    parent.addEventListener('mousemove', handleMouseMove);

    for (let i = 0; i < 36; i++) {
      particles.push({
        x: Math.random() * 1400,
        y: Math.random() * 800,
        r: Math.random() * 2.6 + 1,
        vx: (Math.random() - 0.5) * 0.45,
        vy: -Math.random() * 0.55 - 0.15,
        alpha: Math.random() * 0.65 + 0.2
      });
    }

    const drawHexagon = (x, y, r, strokeStyle, fillStyle) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i;
        const hx = x + r * Math.cos(angle);
        const hy = y + r * Math.sin(angle);
        if (i === 0) ctx.moveTo(hx, hy);
        else ctx.lineTo(hx, hy);
      }
      ctx.closePath();
      if (fillStyle) {
        ctx.fillStyle = fillStyle;
        ctx.fill();
      }
      ctx.strokeStyle = strokeStyle;
      ctx.stroke();
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      const hexRadius = 38;
      const hexHeight = Math.sqrt(3) * hexRadius;
      const horizDist = 1.5 * hexRadius;

      ctx.lineWidth = 1;
      for (let col = 0; col < width / horizDist + 2; col++) {
        for (let row = 0; row < height / hexHeight + 2; row++) {
          const cx = col * horizDist;
          const cy = row * hexHeight + (col % 2 === 1 ? hexHeight / 2 : 0);
          const dist = Math.hypot(cx - mouse.x, cy - mouse.y);

          if (dist < 170) {
            const intensity = 1 - dist / 170;
            drawHexagon(
              cx,
              cy,
              hexRadius - 2,
              `rgba(245, 166, 35, ${0.08 + intensity * 0.45})`,
              `rgba(245, 166, 35, ${intensity * 0.11})`
            );
          } else {
            drawHexagon(cx, cy, hexRadius - 2, 'rgba(255, 255, 255, 0.035)', null);
          }
        }
      }

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -10) p.y = height + 10;
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 190, 61, ${p.alpha})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      parent.removeEventListener('mousemove', handleMouseMove);
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  return <canvas id="honeycombCanvas" ref={canvasRef} />;
}
