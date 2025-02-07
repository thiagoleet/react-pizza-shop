import { api } from "@/lib/axios";
import { Order } from "@/models/order";

export interface GetOrdersResponse {
  orders: Order[];

  meta: {
    pageIndex: number;
    perPage: number;
    total: number;
  };
}

export interface GetOrdersParams {
  pageIndex: number;
}

export async function getOrders() {
  const response = await api.get<GetOrdersResponse>("/orders", {
    params: {
      pageIndex: 0,
    },
  });

  return response.data;
}
