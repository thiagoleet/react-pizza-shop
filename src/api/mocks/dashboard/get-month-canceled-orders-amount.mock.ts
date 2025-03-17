import { http, HttpResponse } from "msw";
import { GetMonthCanceledOrdersAmountResponse } from "../../get-month-canceled-orders-amount";
import { metrics } from "../../constants/metrics";

export const getMonthCanceledOrdersAmountMock = http.get<
  never,
  never,
  GetMonthCanceledOrdersAmountResponse
>(metrics.monthCanceledOrdersAmount, async () => {
  return HttpResponse.json({
    amount: 5,
    diffFromLastMonth: 200,
  });
});
