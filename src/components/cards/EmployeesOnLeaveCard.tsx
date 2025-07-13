"use client";

import React from "react";
import {
  LuChevronLeft,
  LuChevronRight,
  LuChevronsLeft,
  LuChevronsRight,
} from "react-icons/lu";

function EmployeesOnLeaveCard() {
  return (
    <div className="w-full h-full flex flex-col gap-5 py-5 px-6 rounded-[14px] border border-gray-200 overflow-hidden">
      <p className="font-medium text-base leading-none">
        Employees on Leave (6)
      </p>

      <div className="flex gap-2 min-w-max overflow-hidden overflow-x-auto">
        <button className="cursor-pointer bg-primary hover:bg-primary/90 text-white px-[14px] h-[27px] rounded-sm transition-all duration-200 ease-in-out">
          All
        </button>

        <button className="cursor-pointer bg-gray-50 hover:bg-gray-100 border border-gray-200 px-[14px] h-[27px] rounded-sm transition-all duration-200 ease-in-out">
          Full Day
        </button>

        <button className="cursor-pointer bg-gray-50 hover:bg-gray-100 border border-gray-200 px-[14px] h-[27px] rounded-sm transition-all duration-200 ease-in-out">
          Half Day
        </button>

        <button className="cursor-pointer bg-gray-50 hover:bg-gray-100 border border-gray-200 px-[14px] h-[27px] rounded-sm transition-all duration-200 ease-in-out">
          Uninformed
        </button>
      </div>

      <ul className="flex flex-col gap-5 py-[10px] min-h-[148px] flex-1 overflow-hidden overflow-y-auto">
        <li>
          <div className="flex w-full items-center gap-[10px]">
            <div className="w-10 h-10 bg-gray-100 rounded-full"></div>

            <div className="flex-1">
              <p className="font-semibold text-xs tracking-wide">
                Cameron Williamson
              </p>
              <p className="text-xs text-gray-500">IT Admin</p>
            </div>

            <span className="text-xs leading-none bg-gray-100 h-[27px] px-[27px] inline-flex items-center justify-center rounded-full font-[450]">
              Full Day
            </span>
          </div>
        </li>

        <li>
          <div className="flex w-full items-center gap-[10px]">
            <div className="w-10 h-10 bg-gray-100 rounded-full"></div>

            <div className="flex-1">
              <p className="font-semibold text-xs tracking-wide">
                Cameron Williamson
              </p>
              <p className="text-xs text-gray-500">IT Admin</p>
            </div>

            <span className="text-xs leading-none bg-gray-100 h-[27px] px-[27px] inline-flex items-center justify-center rounded-full font-[450]">
              Full Day
            </span>
          </div>
        </li>

        <li>
          <div className="flex w-full items-center gap-[10px]">
            <div className="w-10 h-10 bg-gray-100 rounded-full"></div>

            <div className="flex-1">
              <p className="font-semibold text-xs tracking-wide">
                Cameron Williamson
              </p>
              <p className="text-xs text-gray-500">IT Admin</p>
            </div>

            <span className="text-xs leading-none bg-gray-100 h-[27px] px-[27px] inline-flex items-center justify-center rounded-full font-[450]">
              Full Day
            </span>
          </div>
        </li>

        <li>
          <div className="flex w-full items-center gap-[10px]">
            <div className="w-10 h-10 bg-gray-100 rounded-full"></div>

            <div className="flex-1">
              <p className="font-semibold text-xs tracking-wide">
                Cameron Williamson
              </p>
              <p className="text-xs text-gray-500">IT Admin</p>
            </div>

            <span className="text-xs leading-none bg-gray-100 h-[27px] px-[27px] inline-flex items-center justify-center rounded-full font-[450]">
              Full Day
            </span>
          </div>
        </li>

        <li>
          <div className="flex w-full items-center gap-[10px]">
            <div className="w-10 h-10 bg-gray-100 rounded-full"></div>

            <div className="flex-1">
              <p className="font-semibold text-xs tracking-wide">
                Cameron Williamson
              </p>
              <p className="text-xs text-gray-500">IT Admin</p>
            </div>

            <span className="text-xs leading-none bg-gray-100 h-[27px] px-[27px] inline-flex items-center justify-center rounded-full font-[450]">
              Full Day
            </span>
          </div>
        </li>
      </ul>

      <div className="flex items-center justify-center gap-[5px]">
        <button className="cursor-pointer bg-gray-50 hover:bg-gray-100 border border-gray-200 w-8 h-8 flex items-center justify-center rounded-lg opacity-50 transition-all duration-200 ease-in-out">
          <LuChevronsLeft size={16} />
        </button>

        <button className="cursor-pointer bg-gray-50 hover:bg-gray-100 border border-gray-200 w-8 h-8 flex items-center justify-center rounded-lg opacity-50 transition-all duration-200 ease-in-out">
          <LuChevronLeft size={16} />
        </button>

        <button className="cursor-pointer bg-primary hover:bg-primary/90 text-white w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-200 ease-in-out">
          1
        </button>

        <button className="cursor-pointer bg-gray-50 hover:bg-gray-100 border border-gray-200 w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-200 ease-in-out">
          2
        </button>

        <button className="cursor-pointer bg-gray-50 hover:bg-gray-100 border border-gray-200 w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-200 ease-in-out">
          <LuChevronRight size={16} />
        </button>

        <button className="cursor-pointer bg-gray-50 hover:bg-gray-100 border border-gray-200 w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-200 ease-in-out">
          <LuChevronsRight size={16} />
        </button>
      </div>
    </div>
  );
}

export default React.memo(EmployeesOnLeaveCard);
