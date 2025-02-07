export interface Order {
  orderId: string;
  createdAt: Date;
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
