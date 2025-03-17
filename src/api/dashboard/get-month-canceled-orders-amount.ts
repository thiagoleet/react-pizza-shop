import { api } from "@/lib/axios";
import { metrics } from "./constants/metrics";

export interface GetMonthCanceledOrdersAmountResponse {
  amount: number;
  diffFromLastMonth: number;
}

export async function getMonthCanceledOrdersAmount() {
  const response = await api.get<GetMonthCanceledOrdersAmountResponse>(
    metrics.monthCanceledOrdersAmount
  );

  return response.data;
}
