import { http, HttpResponse } from "msw";
import { metrics } from "../../constants/metrics";
import { GetMonthRevenueResponse } from "@/api/dashboard/get-month-revenue";

export const getMonthRevenueMock = http.get<
  never,
  never,
  GetMonthRevenueResponse
>(metrics.monthReceipt, async () => {
  return HttpResponse.json({
    receipt: 1000,
    diffFromLastMonth: 20,
  });
});
