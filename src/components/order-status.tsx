import { Order, OrderStatus as Status } from "@/models/order";

export interface OrderStatusProps {
  order: Order;
}

const orderStatusMap: Record<Status, string> = {
  pending: "Pendente",
  canceled: "Cancelado",
  processing: "Em preparo",
  delivering: "Em entrega",
  delivered: "Entregue",
};

export function OrderStatus({ order }: OrderStatusProps) {
  const statusColorClass = () => {
    switch (order.status) {
      case "pending":
        return "bg-slate-400";
      case "canceled":
        return "bg-rose-200";
      case "processing":
        return "bg-yellow-500";
      case "delivering":
        return "bg-cyan-500";
      case "delivered":
        return "bg-emerald-500";
      default:
        return "bg-slate-400";
    }
  };

  return (
    <div className="flex items-center gap-2">
      <span className={`h-2 w-2 rounded-full ${statusColorClass()}`}></span>
      <span className="font-medium text-muted-foreground">
        {orderStatusMap[order.status]}
      </span>
    </div>
  );
}
