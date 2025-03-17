import { http, HttpResponse } from "msw";
import { GetDayOrdersAmountResponse } from "../get-day-orders-amount";
import { metrics } from "../constants/metrics";

export const getDayOrdersAmountMock = http.get<
  never,
  never,
  GetDayOrdersAmountResponse
>(metrics.dayOrdersAmount, async () => {
  return HttpResponse.json({
    amount: 20,
    diffFromYesterday: -5,
  });
});
