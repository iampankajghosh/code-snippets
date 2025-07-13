"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
} from "react";
import type { ICardContextType } from "./types";
import { CARDS_IDS, INITIAL_LAYOUT } from "@/constants";

const CardContext = createContext<ICardContextType | undefined>(undefined);

const INITIAL_LIST = CARDS_IDS.filter(
  (id) => !INITIAL_LAYOUT.map((card) => card.i).includes(id)
);

export function CardProviderContext({
  children,
}: Readonly<{ children: ReactNode }>) {
  const [cardIdsOnDashboard, setCardIdsOnDashboard] = useState(
    INITIAL_LAYOUT.map((card) => card.i)
  );
  const [cardIdsOnList, setCardIdsOnList] = useState(INITIAL_LIST);

  const moveToDashboard = (cardId: string) => {
    setCardIdsOnDashboard((prev) =>
      prev.includes(cardId) ? prev : [...prev, cardId]
    );
    setCardIdsOnList((prev) => prev.filter((id) => id !== cardId));
  };

  const moveToList = (cardId: string) => {
    setCardIdsOnList((prev) =>
      prev.includes(cardId) ? prev : [...prev, cardId]
    );
    setCardIdsOnDashboard((prev) => prev.filter((id) => id !== cardId));
  };

  const value = useMemo(
    () => ({
      cardIdsOnDashboard,
      cardIdsOnList,
      moveToDashboard,
      moveToList,
    }),
    [cardIdsOnDashboard, cardIdsOnList]
  );

  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
}

export function useCardContext() {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error("useCardContext must be used within CardProviderContext");
  }
  return context;
}
