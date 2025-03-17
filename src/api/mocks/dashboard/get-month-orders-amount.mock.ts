import { http, HttpResponse } from "msw";
import { GetMonthOrdersAmountResponse } from "../../get-month-orders-amount";
import { metrics } from "../../constants/metrics";

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
