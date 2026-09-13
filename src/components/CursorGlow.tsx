import { useEffect, useState } from 'react';

/**
 * A soft glowing orb that follows the cursor, adding a premium feel.
 * Hidden on touch devices.
 */
export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Skip on touch devices
    if (window.matchMedia('(hover: none)').matches) return;

    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const handleLeave = () => setVisible(false);

    window.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseleave', handleLeave);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="pointer-events-none fixed z-[200] h-6 w-6 rounded-full bg-neon-blue/20 blur-md transition-transform duration-100 ease-out"
      style={{
        left: pos.x - 12,
        top: pos.y - 12,
      }}
    />
  );
}
