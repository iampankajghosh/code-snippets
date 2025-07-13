"use client";

import React from "react";
import { LuClock, LuMessageSquare, LuSearch } from "react-icons/lu";

function Header() {
  return (
    <div className="h-[74px] w-full border-b-2 border-dashed border-gray-200 flex items-center justify-between gap-2 px-5">
      <p className="font-[450] text-xl">Good Morning, Pankaj!</p>

      <div className="inline-flex items-center gap-2">
        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 cursor-pointer font-medium border border-gray-200 rounded-lg px-3 h-[38px] bg-primary hover:bg-primary/90 text-white transition-all duration-200 ease-in-out"
        >
          <LuClock size={18} strokeWidth={2} />
          <span>Clock In</span>
        </button>

        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 cursor-pointer font-medium rounded-lg w-[38px] h-[38px] bg-transparent hover:bg-gray-100 transition-all duration-200 ease-in-out"
        >
          <LuSearch size={22} strokeWidth={1.5} />
        </button>

        <button
          type="button"
          className="relative inline-flex items-center justify-center gap-2 cursor-pointer font-medium rounded-lg w-[38px] h-[38px] bg-transparent hover:bg-gray-100 transition-all duration-200 ease-in-out"
        >
          <LuMessageSquare size={22} strokeWidth={1.5} />

          <span className="absolute top-1.5 right-1.5 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 ease-in-out"
        >
          <div className="w-10 h-10 rounded-full bg-gray-200"></div>

          <p className="text-left">
            <span className="block font-medium">Pankaj Ghosh</span>
            <span className="block text-xs text-gray-400">Admin</span>
          </p>
        </button>
      </div>
    </div>
  );
}

export default React.memo(Header);
