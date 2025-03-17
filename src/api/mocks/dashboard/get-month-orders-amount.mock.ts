import { http, HttpResponse } from "msw";
import { metrics } from "../../constants/metrics";
import { GetMonthOrdersAmountResponse } from "@/api/dashboard/get-month-orders-amount";

export const getMonthOrdersAmountMock = http.get<
  never,
  never,
  GetMonthOrdersAmountResponse
>(metrics.monthOrdersAmount, async () => {
  return HttpResponse.json({
    amount: 20,
    diffFromLastMonth: -5,
  });
});
