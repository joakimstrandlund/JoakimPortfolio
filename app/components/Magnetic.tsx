'use client';

import { useRef } from 'react';

type Props = {
  children: React.ReactNode;
  intensity?: number; // pixels
};

export default function Magnetic({ children, intensity = 3 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const mx = e.clientX - rect.left - rect.width / 2;
    const my = e.clientY - rect.top - rect.height / 2;
    const dx = Math.max(-intensity, Math.min(intensity, (mx / rect.width) * intensity * 2));
    const dy = Math.max(-intensity, Math.min(intensity, (my / rect.height) * intensity * 2));
    el.style.transform = `translate(${dx}px, ${dy}px)`;
  }

  function onLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'translate(0, 0)';
  }

  return (
    <div ref={ref} className="inline-block magnetic" onMouseMove={onMove} onMouseLeave={onLeave}>
      {children}
    </div>
  );
}
