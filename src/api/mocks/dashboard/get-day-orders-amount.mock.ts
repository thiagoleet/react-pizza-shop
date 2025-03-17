import { http, HttpResponse } from "msw";
import { metrics } from "../../constants/metrics";
import { GetDayOrdersAmountResponse } from "@/api/dashboard/get-day-orders-amount";

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
