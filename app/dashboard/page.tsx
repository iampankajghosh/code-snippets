"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import GridLayout, { Layout } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

import { CardProvider } from "@/components/common";
import { useCardContext } from "@/contexts/CardProviderContext";

function DashboardPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(1200);
  const [layout, setLayout] = useState<Layout[]>([]);

  const { cardIdsOnDashboard, moveToDashboard, moveToList } = useCardContext();

  const cols = 8;
  const rowHeight = 70;

  // Resize container width
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

  // Sync layout with cardIdsOnDashboard
  useEffect(() => {
    setLayout((prev) => {
      const existingIds = new Set(prev.map((item) => item.i));

      const newCards = cardIdsOnDashboard
        .filter((id) => !existingIds.has(id))
        .map((id) => ({
          i: id,
          x: 0,
          y: Infinity,
          w: 2,
          h: 2,
          minW: 2,
          minH: 2,
        }));

      const filteredLayout = prev.filter((item) =>
        cardIdsOnDashboard.includes(item.i)
      );

      return [...filteredLayout, ...newCards];
    });
  }, [cardIdsOnDashboard]);

  // Handle drop from card list to dashboard
  const handleDropCards = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      const droppedCardId = e.dataTransfer.getData("text/plain");
      if (!droppedCardId || cardIdsOnDashboard.includes(droppedCardId)) return;

      moveToDashboard(droppedCardId);
    },
    [cardIdsOnDashboard, moveToDashboard]
  );

  const handleLayoutChange = (newLayout: Layout[]) => {
    setLayout(newLayout);
  };

  return (
    <div
      ref={containerRef}
      className="h-[calc(100vh-74px)] w-full overflow-auto relative"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDropCards}
    >
      <GridLayout
        className="layout"
        layout={layout}
        cols={cols}
        rowHeight={rowHeight}
        width={width}
        margin={[16, 16]}
        containerPadding={[20, 20]}
        isDraggable
        isResizable
        autoSize
        onLayoutChange={handleLayoutChange}
      >
        {layout.map((card) => (
          <div
            key={card.i}
            draggable
            onDragStart={(e) => {
              e.dataTransfer.setData("text/plain", card.i);
            }}
            onDoubleClick={() => moveToList(card.i)}
          >
            <CardProvider cardId={card.i} />
          </div>
        ))}
      </GridLayout>
    </div>
  );
}

export default React.memo(DashboardPage);
