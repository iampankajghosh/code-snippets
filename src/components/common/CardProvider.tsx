"use client";

import React from "react";
import {
  EmployeesOnLeaveCard,
  TodaysAbsentsCard,
  TodaysAttendanceCard,
  TodaysLateArrivalsCard,
  EventsCard,
} from "../cards";

function CardProvider({ cardId }: Readonly<{ cardId: string }>) {
  switch (cardId) {
    case "todays-late-arrivals-card":
      return <TodaysLateArrivalsCard />;
    case "todays-absents-card":
      return <TodaysAbsentsCard />;
    case "todays-attendance-card":
      return <TodaysAttendanceCard />;
    case "employees-on-leave-card":
      return <EmployeesOnLeaveCard />;
    case "events-card":
      return <EventsCard />;
    default:
      return null;
  }
}

export default CardProvider;
