import { env } from "@/env";
import { setupWorker } from "msw/browser";

import { getDailyRevenueInPeriodMock } from "./get-daily-revenue-in-period.mock";
import { getDayOrdersAmountMock } from "./get-day-orders-amount.mock";
import { getMonthCanceledOrdersAmountMock } from "./get-month-canceled-orders-amount.mock";
import { getMonthOrdersAmountMock } from "./get-month-orders-amount.mock";
import { getMonthRevenueMock } from "./get-month-revenue.mock";
import { registerRestaurantsMock } from "./register-restaurant.mock";
import { signInMock } from "./sign-in.mock";
import { getPopularProductsMock } from "./get-popular-products.mock";

export const worker = setupWorker(
  getDailyRevenueInPeriodMock,
  getDayOrdersAmountMock,
  getMonthCanceledOrdersAmountMock,
  getMonthOrdersAmountMock,
  getMonthRevenueMock,
  getPopularProductsMock,
  registerRestaurantsMock,
  signInMock
);

export async function enableMSW() {
  if (env.MODE !== "test") {
    return;
  }

  await worker.start();
}
