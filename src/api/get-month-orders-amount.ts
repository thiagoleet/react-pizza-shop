import { api } from "@/lib/axios";
import { metrics } from "./constants/metrics";

export interface GetMonthOrdersAmountResponse {
  amount: number;
  diffFromLastMonth: number;
}

export async function getMonthOrdersAmount() {
  const response = await api.get<GetMonthOrdersAmountResponse>(
    metrics.monthOrdersAmount
  );

  return response.data;
}
