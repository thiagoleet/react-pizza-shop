import { env } from "@/env";
import { setupWorker } from "msw/browser";
import { signInMock } from "./sign-in.mock";
import { registerRestaurantsMock } from "./register-restaurant.mock";

export const worker = setupWorker(signInMock, registerRestaurantsMock);

export async function enableMSW() {
  if (env.MODE !== "test") {
    return;
  }

  await worker.start();
}
