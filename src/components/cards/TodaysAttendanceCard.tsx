"use client";

import React from "react";
import { StateCard } from "../common";

function TodaysAttendanceCard() {
  return (
    <StateCard
      title="Today's Attendance"
      value={76}
      change="+10%"
      changeColor="text-green-600"
      subText="Employees present"
      buttonText="View All"
      onButtonClick={() => console.log("Clicked View All")}
    />
  );
}

export default React.memo(TodaysAttendanceCard);
