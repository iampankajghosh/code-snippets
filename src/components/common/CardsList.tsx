"use client";

import React, { useCallback, useState } from "react";
import { LuX } from "react-icons/lu";
import { twMerge } from "tailwind-merge";
import CardProvider from "./CardProvider";
import { useCardContext } from "@/contexts/CardProviderContext";

function CardsList() {
  const [isOpen, setIsOpen] = useState(true);
  const { cardIdsOnList, moveToList } = useCardContext();

  const toggleCardList = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const handleDropBack = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      const droppedCardId = e.dataTransfer.getData("text/plain");

      if (!droppedCardId || cardIdsOnList.includes(droppedCardId)) return;

      moveToList(droppedCardId);
    },
    [cardIdsOnList, moveToList]
  );

  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDropBack}
      className={twMerge(
        "fixed top-0 right-0 h-screen w-[400px] bg-white border-l-2 border-dashed border-gray-200 z-20 transition-all duration-200 ease-in-out",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}
    >
      <div className="h-[74px] flex items-center justify-between gap-2 px-[14px]">
        <span className="font-medium text-xl">Logo</span>
        <button onClick={toggleCardList}>
          <LuX size={22} strokeWidth={2} />
        </button>
      </div>

      <ul className="px-4 py-6 flex flex-col gap-4">
        {cardIdsOnList.map((id) => (
          <li
            key={id}
            className="w-full h-[380px] cursor-grab bg-gray-50 hover:bg-gray-100 p-2 rounded-2xl transition-all"
            draggable
            onDragStart={(e) => {
              e.dataTransfer.setData("text/plain", id);
            }}
          >
            <CardProvider cardId={id} />
          </li>
        ))}
      </ul>

      {cardIdsOnList.length === 0 && (
        <div className="py-6 px-4 text-center text-gray-500">
          <p className="font-medium text-gray-900">No More Cards Here</p>
          <p>All cards have been added to your dashboard.</p>
        </div>
      )}
    </div>
  );
}

export default React.memo(CardsList);
