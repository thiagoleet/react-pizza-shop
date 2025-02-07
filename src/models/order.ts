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
  | "delivering"
  | "delivered";

export interface OrderDetails {
  id: string;
  createdAt: string;
  status: OrderStatus;
  totalInCents: number;
  customer: OrderCustomer;
  orderItems: OrderItem[];
}

export interface OrderCustomer {
  name: string;
  email: string;
  phone: string;
}

export interface OrderItem {
  id: string;
  priceInCents: number;
  quantity: number;
  product: OrderProduct;
}

export interface OrderProduct {
  name: string;
}
