export interface Order {
  orderId: string;
  createdAt: string;
  status: OrderStatus;
  customerName: string;
  total: number;
}

export type OrderStatus =
  | "pending"
  | "canceled"
  | "processing"
  | "deliveryng"
  | "delivered";
