import type { Layout } from "react-grid-layout";

export const CARDS_IDS: string[] = [
  "todays-attendance-card",
  "todays-absents-card",
  "todays-late-arrivals-card",
  "employees-on-leave-card",
  "events-card",
];

export const INITIAL_LAYOUT: Layout[] = [
  {
    i: "todays-attendance-card",
    x: 0,
    y: 0,
    w: 2,
    h: 2,
    minW: 2,
    minH: 2,
  },
  {
    i: "todays-absents-card",
    x: 2,
    y: 0,
    w: 2,
    h: 2,
    minW: 2,
    minH: 2,
  },
  {
    i: "todays-late-arrivals-card",
    x: 4,
    y: 0,
    w: 2,
    h: 2,
    minW: 2,
    minH: 2,
  },
  //   {
  //     i: "employees-on-leave-card",
  //     x: 6,
  //     y: 0,
  //     w: 2,
  //     h: 4,
  //     minW: 2,
  //     minH: 4,
  //   },
];
