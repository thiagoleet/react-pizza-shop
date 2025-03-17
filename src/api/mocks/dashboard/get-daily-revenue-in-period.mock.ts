import { http, HttpResponse } from "msw";
import { metrics } from "../../constants/metrics";
import { GetDailyRevenueInPeriodResponse } from "../../get-daily-revenue-in-period";

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>(metrics.daylyReceiptInPeriod, async () => {
  return HttpResponse.json([
    {
      date: "2021-09-01",
      receipt: 100,
    },
    {
      date: "2021-09-02",
      receipt: 200,
    },
    {
      date: "2021-09-03",
      receipt: 300,
    },
    {
      date: "2021-09-04",
      receipt: 400,
    },
    {
      date: "2021-09-05",
      receipt: 500,
    },
    {
      date: "2021-09-06",
      receipt: 600,
    },
  ]);
});
