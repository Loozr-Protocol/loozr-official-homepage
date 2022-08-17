import BigNumber from "bignumber.js";
import { LZR_IN_USD } from "../config/constants";
import { BIG_TEN } from "./bigNumber";

export const getBalanceAmount = (amount: string | BigNumber, decimals = 24) => {
  return new BigNumber(amount).dividedBy(BIG_TEN.pow(decimals))
}

export const getDecimalAmount = (amount: BigNumber, decimals = 24) => {
  return new BigNumber(amount).times(BIG_TEN.pow(decimals))
}

export const getFullDisplayBalance = (balance: string|BigNumber, decimals = 24, displayDecimals?: number): string => {
  return getBalanceAmount(balance, decimals).toFixed(displayDecimals)
}

export const formatNumber = (number: number, minPrecision = 2, maxPrecision = 2) => {
  const options = {
    minimumFractionDigits: minPrecision,
    maximumFractionDigits: maxPrecision,
  }
  return number.toLocaleString(undefined, options)
}

export const formatBalanceUSD = (amount: number) => {
  const dollarAmount = amount * LZR_IN_USD;
  return formatNumber(dollarAmount, 2, 6);
}