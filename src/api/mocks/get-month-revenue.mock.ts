import { http, HttpResponse } from "msw";
import { metrics } from "../constants/metrics";
import { GetMonthRevenueResponse } from "../get-month-revenue";

export const getMonthRevenueMock = http.get<
  never,
  never,
  GetMonthRevenueResponse
>(metrics.monthCanceledOrdersAmount, async () => {
  return HttpResponse.json({
    receipt: 5,
    diffFromLastMonth: 200,
  });
});
