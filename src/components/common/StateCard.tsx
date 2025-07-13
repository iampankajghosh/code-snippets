"use client";

import React from "react";
import clsx from "clsx";
import { IStateCardProps } from "./types";

function StateCard({
  title,
  value,
  change,
  changeColor = "text-green-600",
  subText,
  buttonText,
  onButtonClick,
}: Readonly<IStateCardProps>) {
  return (
    <div className="w-full h-full flex flex-col justify-between py-5 px-6 rounded-[14px] border border-gray-200 bg-gradient-to-bl from-gray-50 to-white">
      <p className="font-semibold text-base mb-5 leading-none">{title}</p>

      <div className="flex w-full justify-between gap-4">
        <div>
          <p className="flex gap-1 items-center flex-wrap">
            <span className="text-2xl font-semibold">{value}</span>
            {change && (
              <span className="text-xs text-gray-500">
                <span className={clsx(changeColor, "font-medium")}>
                  {change}
                </span>{" "}
                vs Last Day
              </span>
            )}
          </p>
          {subText && <p>{subText}</p>}
        </div>

        {buttonText && (
          <button
            onClick={onButtonClick}
            className="self-end cursor-pointer border text-xs border-primary text-primary rounded-md py-[6px] px-4 hover:bg-primary hover:text-white transition-all duration-200 ease-in-out"
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
}

export default React.memo(StateCard);
