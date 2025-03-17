import { api } from "@/lib/axios";
import { metrics } from "./constants/metrics";

export interface GetDayOrdersAmountResponse {
  amount: number;
  diffFromYesterday: number;
}

export async function getDayOrdersAmount() {
  const response = await api.get<GetDayOrdersAmountResponse>(
    metrics.dayOrdersAmount
  );

  return response.data;
}
