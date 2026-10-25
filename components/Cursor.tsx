"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CoffeeCursor() {
  const cursorRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        rotation: e.clientX * 0.05,
        duration: 0.3,
        ease: "power3.out",
        overwrite: "auto",
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      gsap.killTweensOf(cursor);
    };
  }, []);

  return (
    <img
      ref={cursorRef}
      src="/coffee-bean.png"
      alt=""
      aria-hidden="true"
      className="coffee-cursor"
    />
  );
}