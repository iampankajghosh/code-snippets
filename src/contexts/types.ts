export type ICardContextType = {
  cardIdsOnDashboard: string[];
  cardIdsOnList: string[];
  moveToDashboard: (cardId: string) => void;
  moveToList: (cardId: string) => void;
};
