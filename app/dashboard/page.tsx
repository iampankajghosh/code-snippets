"use client";

import React, { useEffect, useRef, useState } from "react";
import GridLayout from "react-grid-layout";
import { INITIAL_LAYOUT } from "@/constants";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { CardProvider } from "@/components/common";

function DashboardPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(1200);

  const cols = 8;
  const rowHeight = 70;

  useEffect(() => {
    const resize = () => {
      if (containerRef.current) {
        setWidth(containerRef.current.offsetWidth);
      }
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div
      className="h-[calc(100vh-74px)] w-full overflow-auto"
      ref={containerRef}
    >
      <GridLayout
        className="layout"
        layout={INITIAL_LAYOUT}
        cols={cols}
        rowHeight={rowHeight}
        width={width}
        margin={[16, 16]}
        containerPadding={[20, 20]}
        isDraggable
        isResizable
        autoSize
      >
        {INITIAL_LAYOUT.map((card) => (
          <div key={card.i}>
            <CardProvider cardId={card.i} />
          </div>
        ))}
      </GridLayout>
    </div>
  );
}

export default React.memo(DashboardPage);
