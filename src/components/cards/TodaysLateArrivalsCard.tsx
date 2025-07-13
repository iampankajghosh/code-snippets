"use client";

import React from "react";
import { StateCard } from "../common";

function TodaysLateArrivalsCard() {
  return (
    <StateCard
      title="Today's Late Arrivals"
      value={4}
      subText="Employees late"
      buttonText="View All"
      onButtonClick={() => console.log("Clicked View All")}
    />
  );
}

export default React.memo(TodaysLateArrivalsCard);
