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
  orderId?: string | null;
  customerName?: string | null;
  status?: string | null;
}

export async function getOrders({
  pageIndex,
  orderId,
  customerName,
  status,
}: GetOrdersParams) {
  const response = await api.get<GetOrdersResponse>("/orders", {
    params: {
      pageIndex,
      orderId,
      customerName,
      status,
    },
  });

  return response.data;
}
