import { api } from "@/lib/axios";
import { OrderDetails } from "@/models/order";

export interface OrderDetailsParams {
  orderId: string;
}

export async function getOrderDetails({ orderId }: OrderDetailsParams) {
  const response = await api.get<OrderDetails>(`/orders/${orderId}`);

  return response.data;
}
