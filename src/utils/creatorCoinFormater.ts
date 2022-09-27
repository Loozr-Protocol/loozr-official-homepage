import { PRICE_RATE_EXPONENT, PRICE_SLOPE } from "../config/constants";
import { getBalanceAmount } from "./formatBalance";

export const priceInLoozr = (totalSupply: string) => {
  const totalSupplyBN = getBalanceAmount(totalSupply);
  const priceInLoozr = PRICE_SLOPE.times(Number(totalSupplyBN.pow(PRICE_RATE_EXPONENT).toFixed()));
  const priceAsStr = priceInLoozr.toFixed();
  return Number(priceAsStr);
}