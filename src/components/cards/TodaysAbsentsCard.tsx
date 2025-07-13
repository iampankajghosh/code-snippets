"use client";

import React from "react";
import { StateCard } from "../common";

function TodaysAbsentsCard() {
  return (
    <StateCard
      title="Today's Absents"
      value={5}
      subText="Employees on leave"
      buttonText="View All"
      onButtonClick={() => console.log("Clicked View All")}
    />
  );
}

export default React.memo(TodaysAbsentsCard);
