"use client";

import React, { useCallback, useState } from "react";
import { LuX } from "react-icons/lu";
import { twMerge } from "tailwind-merge";

function CardsList() {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggleCardList = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <div
      className={twMerge(
        "fixed top-0 right-0 h-screen w-[400px] bg-white border-l-2 border-dashed border-gray-200 z-20 transition-all duration-200 ease-in-out",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}
    >
      <div className="h-[74px] flex items-center justify-between gap-2 px-[14px]">
        <span className="font-medium text-xl transition-all duration-200 ease-in-out">
          Logo
        </span>

        <button onClick={toggleCardList} className="cursor-pointer">
          <LuX size={22} strokeWidth={2} />
        </button>
      </div>

      {/* <ul className="px-4 py-6">cards</ul> */}

      <div className="py-6 px-4">
        <p className="text-center max-w-[90%] mx-auto">
          <span className="block text-base font-[450] text-gray-900">
            No More Cards Here
          </span>
          <span className="text-gray-500">
            All cards have been added to your dashboard. You can manage them
            there.
          </span>
        </p>
      </div>
    </div>
  );
}

export default React.memo(CardsList);
