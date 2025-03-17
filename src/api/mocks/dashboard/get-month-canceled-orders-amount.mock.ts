import { http, HttpResponse } from "msw";
import { metrics } from "../../constants/metrics";
import { GetMonthCanceledOrdersAmountResponse } from "@/api/dashboard/get-month-canceled-orders-amount";

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
