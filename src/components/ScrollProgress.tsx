"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const total = doc.scrollHeight - doc.clientHeight;
      const pct = total > 0 ? (doc.scrollTop / total) * 100 : 0;
      setProgress(pct);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div aria-hidden className="fixed left-0 top-0 h-[3px] w-full z-50 pointer-events-none">
      <div className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 transition-all" style={{ width: `${progress}%` }} />
    </div>
  );
}
