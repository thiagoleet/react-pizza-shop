import { api } from "@/lib/axios";
import { metrics } from "../constants/metrics";

export type GetDailyRevenueInPeriodResponse = {
  date: string;
  receipt: number;
}[];

export interface GetDailyRevenueInPeriodQuery {
  from?: Date;
  to?: Date;
}

export async function getDailyRevenueInPeriod({
  from,
  to,
}: GetDailyRevenueInPeriodQuery) {
  const response = await api.get<GetDailyRevenueInPeriodResponse>(
    metrics.daylyReceiptInPeriod,
    {
      params: {
        from: from?.toISOString(),
        to: to?.toISOString(),
      },
    }
  );

  return response.data;
}
