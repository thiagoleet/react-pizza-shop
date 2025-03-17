import { api } from "@/lib/axios";
import { metrics } from "../constants/metrics";

export interface GetMonthRevenueResponse {
  receipt: number;
  diffFromLastMonth: number;
}

export async function getMonthRevenue() {
  const response = await api.get<GetMonthRevenueResponse>(metrics.monthReceipt);

  return response.data;
}
