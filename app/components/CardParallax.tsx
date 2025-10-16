'use client';

import { useRef } from 'react';

type Props = {
  children: React.ReactNode;
  max?: number; // px
};

export default function CardParallax({ children, max = 2 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5..0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    const tx = Math.max(-max, Math.min(max, -x * max * 2));
    const ty = Math.max(-max, Math.min(max, -y * max * 2));
    el.style.setProperty('--tx', `${tx}px`);
    el.style.setProperty('--ty', `${ty}px`);
  }

  function onLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--tx', `0px`);
    el.style.setProperty('--ty', `0px`);
  }

  return (
    <div ref={ref} className="card-parallax" onMouseMove={onMove} onMouseLeave={onLeave}>
      {children}
    </div>
  );
}
