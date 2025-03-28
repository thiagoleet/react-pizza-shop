import { env } from "@/env";
import { setupWorker } from "msw/browser";

import { approveOrderMock } from "./orders/approve-order.mock";
import { cancelOrderMock } from "./orders/cancel-order.mock";
import { deliverOrderMock } from "./orders/deliver-order.mock";
import { dispatchOrderMock } from "./orders/dispatch-order.mock";
import { getDailyRevenueInPeriodMock } from "./dashboard/get-daily-revenue-in-period.mock";
import { getDayOrdersAmountMock } from "./dashboard/get-day-orders-amount.mock";
import { getManagedRestaurantMock } from "./auth/get-managed-restaurant.mock";
import { getMonthCanceledOrdersAmountMock } from "./dashboard/get-month-canceled-orders-amount.mock";
import { getMonthOrdersAmountMock } from "./dashboard/get-month-orders-amount.mock";
import { getMonthRevenueMock } from "./dashboard/get-month-revenue.mock";
import { getOrderDetailsMock } from "./orders/get-order-details.mock";
import { getOrdersMock } from "./orders/get-orders.mock";
import { getPopularProductsMock } from "./dashboard/get-popular-products.mock";
import { getProfileMock } from "./auth/get-profile.mock";
import { registerRestaurantsMock } from "./auth/register-restaurant.mock";
import { signInMock } from "./auth/sign-in.mock";
import { updateProfileMock } from "./auth/update-profile.mock";

export const worker = setupWorker(
  approveOrderMock,
  cancelOrderMock,
  deliverOrderMock,
  dispatchOrderMock,
  getDailyRevenueInPeriodMock,
  getDayOrdersAmountMock,
  getManagedRestaurantMock,
  getMonthCanceledOrdersAmountMock,
  getMonthOrdersAmountMock,
  getMonthRevenueMock,
  getOrderDetailsMock,
  getOrdersMock,
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
