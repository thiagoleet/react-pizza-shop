import { api } from "@/lib/axios";
import { Order } from "@/models/order";

export interface GetOrdersResponse {
  orders: Order[];

  meta: {
    pageIndex: number;
    perPage: number;
    totalCount: number;
  };
}

export interface GetOrdersParams {
  pageIndex?: number | null;
}

export async function getOrders({ pageIndex }: GetOrdersParams) {
  const response = await api.get<GetOrdersResponse>("/orders", {
    params: {
      pageIndex,
    },
  });

  return response.data;
}
