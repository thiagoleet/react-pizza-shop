import { api } from "@/lib/axios";
import { metrics } from "../constants/metrics";

export type GetPopularProductsResponse = {
  product: string;
  amount: number;
}[];

export async function getPopularProducts() {
  const response = await api.get<GetPopularProductsResponse>(
    metrics.popularProducts
  );

  return response.data;
}
