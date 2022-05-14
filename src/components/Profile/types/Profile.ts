export type CardState = {
  cardNumber: string;
  expiryDate: string;
  cardName: string;
  cvc: string;
};

export const initialState: CardState = {
  cardNumber: "",
    expiryDate: "",
    cardName: "",
    cvc: "",
};