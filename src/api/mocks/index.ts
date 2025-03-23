import { env } from "@/env";
import { setupWorker } from "msw/browser";

import { getDailyRevenueInPeriodMock } from "./dashboard/get-daily-revenue-in-period.mock";
import { getDayOrdersAmountMock } from "./dashboard/get-day-orders-amount.mock";
import { getMonthCanceledOrdersAmountMock } from "./dashboard/get-month-canceled-orders-amount.mock";
import { getMonthOrdersAmountMock } from "./dashboard/get-month-orders-amount.mock";
import { getMonthRevenueMock } from "./dashboard/get-month-revenue.mock";
import { getPopularProductsMock } from "./dashboard/get-popular-products.mock";
import { registerRestaurantsMock } from "./auth/register-restaurant.mock";
import { signInMock } from "./auth/sign-in.mock";
import { getManagedRestaurantMock } from "./auth/get-managed-restaurant.mock";
import { getProfileMock } from "./auth/get-profile.mock";
import { updateProfileMock } from "./auth/update-profile.mock";

export const worker = setupWorker(
  getDailyRevenueInPeriodMock,
  getDayOrdersAmountMock,
  getManagedRestaurantMock,
  getMonthCanceledOrdersAmountMock,
  getMonthOrdersAmountMock,
  getMonthRevenueMock,
  getPopularProductsMock,
  getProfileMock,
  registerRestaurantsMock,
  signInMock,
  updateProfileMock
);

export async function enableMSW() {
  if (env.MODE !== "test") {
    return;
  }

  await worker.start();
}
