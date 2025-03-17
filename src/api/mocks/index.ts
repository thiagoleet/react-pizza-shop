import { env } from "@/env";
import { setupWorker } from "msw/browser";

import { getDailyRevenueInPeriodMock } from "./dashboard/get-daily-revenue-in-period.mock";
import { getDayOrdersAmountMock } from "./dashboard/get-day-orders-amount.mock";
import { getMonthCanceledOrdersAmountMock } from "./dashboard/get-month-canceled-orders-amount.mock";
import { getMonthOrdersAmountMock } from "./dashboard/get-month-orders-amount.mock";
import { getMonthRevenueMock } from "./dashboard/get-month-revenue.mock";
import { registerRestaurantsMock } from "./auth/register-restaurant.mock";
import { signInMock } from "./auth/sign-in.mock";
import { getPopularProductsMock } from "./dashboard/get-popular-products.mock";

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
