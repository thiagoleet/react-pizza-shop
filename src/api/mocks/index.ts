import { env } from "@/env";
import { setupWorker } from "msw/browser";
import { signInMock } from "./sign-in.mock";
import { registerRestaurantsMock } from "./register-restaurant.mock";
import { getDayOrdersAmountMock } from "./get-day-orders-amount.mock";
import { getMonthOrdersAmountMock } from "./get-month-orders-amount.mock";
import { getMonthCanceledOrdersAmountMock } from "./get-month-canceled-orders-amount.mock";

export const worker = setupWorker(
  signInMock,
  registerRestaurantsMock,
  getDayOrdersAmountMock,
  getMonthOrdersAmountMock,
  getMonthCanceledOrdersAmountMock
);

export async function enableMSW() {
  if (env.MODE !== "test") {
    return;
  }

  await worker.start();
}
