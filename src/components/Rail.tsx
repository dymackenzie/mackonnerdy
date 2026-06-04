"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
};

/**
 * Horizontal scroll rail with pointer drag-to-scroll, vertical-wheel→horizontal,
 * and prev/next arrow buttons, since the scrollbar is hidden site-wide and a plain
 * mouse can't otherwise pan a horizontal overflow container. Pair the inner scroll
 * element with the `.scroll-x` class (flex + overflow-x).
 *
 * - Drag: click-and-drag pans the rail; a real drag suppresses the click so cards
 *   don't open mid-swipe. Touch keeps native momentum scrolling (we don't capture it).
 * - Wheel: a vertical wheel pans horizontally, but only while the rail can still
 *   scroll that way — at either edge we release so the page keeps scrolling.
 * - Arrows: desktop-only (touch users swipe); each auto-hides at its edge and
 *   scrolls by ~85% of the visible width.
 */
export function Rail({ className = "", children }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, moved: false, startX: 0, startLeft: 0 });
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(false);

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setShowPrev(el.scrollLeft > 1);
    setShowNext(el.scrollLeft < max - 1);
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  const scrollBy = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" });
  };

  const onPointerDown = (e: React.PointerEvent) => {
    // Mouse only — let touch use native momentum scrolling.
    if (e.pointerType !== "mouse") return;
    const el = ref.current;
    if (!el) return;
    drag.current = {
      active: true,
      moved: false,
      startX: e.clientX,
      startLeft: el.scrollLeft,
    };
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el || !drag.current.active) return;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 4) {
      if (!drag.current.moved) {
        drag.current.moved = true;
        el.setPointerCapture(e.pointerId);
        el.style.cursor = "grabbing";
      }
      el.scrollLeft = drag.current.startLeft - dx;
    }
  };

  const endDrag = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    if (drag.current.moved && el.hasPointerCapture?.(e.pointerId)) {
      el.releasePointerCapture(e.pointerId);
    }
    drag.current.active = false;
    el.style.cursor = "";
  };

  // Suppress the click that follows a real drag so a card doesn't open mid-swipe.
  const onClickCapture = (e: React.MouseEvent) => {
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      drag.current.moved = false;
    }
  };

  const onWheel = (e: React.WheelEvent) => {
    const el = ref.current;
    if (!el) return;
    // Trackpad horizontal gestures already work; only translate vertical wheels.
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
    const max = el.scrollWidth - el.clientWidth;
    const atStart = el.scrollLeft <= 0;
    const atEnd = el.scrollLeft >= max - 1;
    // Release to the page at the edges instead of trapping the scroll.
    if ((e.deltaY < 0 && atStart) || (e.deltaY > 0 && atEnd)) return;
    e.preventDefault();
    el.scrollLeft += e.deltaY;
  };

  return (
    <div className="relative mx-auto w-full max-w-6xl">
      <RailArrow side="prev" show={showPrev} onClick={() => scrollBy(-1)} />
      <RailArrow side="next" show={showNext} onClick={() => scrollBy(1)} />
      <div
        ref={ref}
        className={`scroll-x ${className}`}
        onScroll={update}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onClickCapture={onClickCapture}
        onWheel={onWheel}
      >
        {children}
      </div>
    </div>
  );
}

function RailArrow({
  side,
  show,
  onClick,
}: {
  side: "prev" | "next";
  show: boolean;
  onClick: () => void;
}) {
  const isPrev = side === "prev";
  return (
    <button
      type="button"
      aria-label={isPrev ? "Scroll left" : "Scroll right"}
      onClick={onClick}
      tabIndex={show ? 0 : -1}
      className={`absolute top-[42%] z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center border border-ink/15 bg-paper-bright text-ink shadow-sm transition-all duration-200 hover:bg-ink hover:text-paper-bright sm:flex ${
        isPrev ? "left-2" : "right-2"
      } ${show ? "opacity-100" : "pointer-events-none opacity-0"}`}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
      >
        <polyline points={isPrev ? "15 5 8 12 15 19" : "9 5 16 12 9 19"} />
      </svg>
    </button>
  );
}
