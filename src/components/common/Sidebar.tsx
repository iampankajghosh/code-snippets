"use client";

import Link from "next/link";
import React, { useCallback, useState } from "react";
import {
  LuCalendar1,
  LuChartLine,
  LuFolderClosed,
  LuGrid2X2Plus,
  LuHourglass,
  LuLogOut,
  LuPanelLeftClose,
  LuPanelLeftOpen,
  LuSettings2,
  LuUserRoundCheck,
  LuUsers,
} from "react-icons/lu";
import { twMerge } from "tailwind-merge";
import type { ISidebarItem } from "./types";
import { usePathname } from "next/navigation";

const PRIMARY_SIDEBAR_ITEMS: ISidebarItem[] = [
  {
    id: "dashboard",
    title: "Dashboard",
    href: "/dashboard",
    icon: <LuChartLine size={20} strokeWidth={2} />,
  },
  {
    id: "projects",
    title: "Projects",
    href: "/projects",
    icon: <LuFolderClosed size={20} strokeWidth={2} />,
  },
  {
    id: "employees",
    title: "Employees",
    href: "/employees",
    icon: <LuUsers size={20} strokeWidth={2} />,
  },
  {
    id: "leaves",
    title: "Leave Details",
    href: "/leaves",
    icon: <LuCalendar1 size={20} strokeWidth={2} />,
  },
  {
    id: "others",
    title: "Others",
    href: "/others",
    icon: <LuSettings2 size={20} strokeWidth={2} />,
  },
];

const SECONDARY_SIDEBAR_ITEMS: ISidebarItem[] = [
  {
    id: "productivity",
    title: "Productivity",
    href: "/productivity",
    icon: <LuHourglass size={20} strokeWidth={2} />,
  },
  {
    id: "roles-and-responsibilities",
    title: "Roles & Responsibilities",
    href: "/roles-and-responsibilities",
    icon: <LuUserRoundCheck size={20} strokeWidth={2} />,
  },
];

function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggleSidebar = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const isActive = useCallback(
    (href: string) => {
      return pathname === href;
    },
    [pathname]
  );

  return (
    <div
      className={twMerge(
        "h-screen border-r-2 border-dashed border-gray-200 overflow-hidden overflow-y-auto transition-all duration-200 ease-in-out",
        isOpen ? "w-[280px]" : "w-[74px]"
      )}
    >
      <div
        className={twMerge(
          "h-[74px] border-b-2 border-dashed border-gray-200 flex items-center gap-2 px-[14px] transition-all duration-200 ease-in-out",
          isOpen ? "justify-between" : "justify-center"
        )}
      >
        <span
          className={twMerge(
            "font-medium text-xl transition-all duration-200 ease-in-out",
            isOpen ? "block" : "hidden"
          )}
        >
          Logo
        </span>

        <button
          onClick={toggleSidebar}
          className="cursor-pointer text-gray-900"
        >
          {isOpen ? (
            <LuPanelLeftClose size={22} strokeWidth={2} />
          ) : (
            <LuPanelLeftOpen size={22} strokeWidth={2} />
          )}
        </button>
      </div>

      <div className="h-[calc(100vh-148px)] border-b-2 border-dashed border-gray-200">
        <ul className="px-4 py-6 flex flex-col gap-3 border-b-2 border-dashed border-gray-200">
          {PRIMARY_SIDEBAR_ITEMS.map((item: ISidebarItem) => (
            <li key={item.id}>
              <Link
                href={"/projects"}
                title={item.title}
                className={twMerge(
                  "group flex items-center gap-[10px] px-4 py-[10px] rounded-md cursor-pointer hover:bg-gray-100 text-gray-700 font-[450] hover:text-gray-900 transition-all duration-200 ease-in-out",
                  isOpen ? "justify-start" : "justify-center",
                  isActive(item.href) ? "bg-gray-100 text-gray-900" : ""
                )}
              >
                {!!item.icon && (
                  <span className="text-gray-700 group-hover:text-primary transition-all duration-200 ease-in-out">
                    {item.icon}
                  </span>
                )}

                <span
                  className={twMerge("min-w-max", isOpen ? "block" : "hidden")}
                >
                  {item.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <ul className="px-4 py-6 flex flex-col gap-3 border-b-2 border-dashed border-gray-200">
          {SECONDARY_SIDEBAR_ITEMS.map((item: ISidebarItem) => (
            <li key={item.id}>
              <Link
                href={"/projects"}
                title={item.title}
                className={twMerge(
                  "group flex items-center gap-[10px] px-4 py-[10px] rounded-md cursor-pointer hover:bg-gray-100 text-gray-700 font-[450] hover:text-gray-900 transition-all duration-200 ease-in-out",
                  isOpen ? "justify-start" : "justify-center"
                )}
              >
                {!!item.icon && (
                  <span className="text-gray-700 group-hover:text-primary transition-all duration-200 ease-in-out">
                    {item.icon}
                  </span>
                )}

                <span
                  className={twMerge("min-w-max", isOpen ? "block" : "hidden")}
                >
                  {item.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="py-6 px-4 flex items-center">
          <button
            title="Edit Board"
            className={twMerge(
              "w-full group flex items-center gap-[10px] px-4 py-[10px] rounded-md cursor-pointer hover:bg-gray-100 text-gray-700 font-[450] hover:text-gray-900 transition-all duration-200 ease-in-out",
              isOpen ? "justify-start" : "justify-center"
            )}
          >
            <span className="text-gray-700 group-hover:text-primary transition-all duration-200 ease-in-out">
              <LuGrid2X2Plus size={20} strokeWidth={2} />
            </span>

            <span className={twMerge("min-w-max", isOpen ? "block" : "hidden")}>
              Edit Board
            </span>
          </button>
        </div>
      </div>

      <div className="h-[74px] px-4 flex items-center">
        <button
          title="Logout"
          className={twMerge(
            "w-full group flex items-center gap-[10px] px-4 py-[10px] rounded-md cursor-pointer hover:bg-gray-100 text-gray-700 font-[450] hover:text-gray-900 transition-all duration-200 ease-in-out",
            isOpen ? "justify-start" : "justify-center"
          )}
        >
          <span className="text-gray-700 group-hover:text-primary transition-all duration-200 ease-in-out">
            <LuLogOut size={20} strokeWidth={2} />
          </span>

          <span className={twMerge("min-w-max", isOpen ? "block" : "hidden")}>
            Logout
          </span>
        </button>
      </div>
    </div>
  );
}

export default React.memo(Sidebar);
