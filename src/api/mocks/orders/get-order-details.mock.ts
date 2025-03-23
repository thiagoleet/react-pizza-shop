import { http, HttpResponse } from "msw";
import { OrderDetailsParams } from "@/api/orders/get-order-details";
import { OrderDetails } from "@/models/order";

export const getOrderDetailsMock = http.get<
  OrderDetailsParams,
  never,
  OrderDetails
>("/orders/:orderId", async ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+1234567890",
    },
    createdAt: new Date().toISOString(),
    status: "pending",
    orderItems: [
      {
        id: "item-1",
        priceInCents: 1000,
        quantity: 2,
        product: {
          name: "Product 1",
        },
      },
      {
        id: "item-2",
        priceInCents: 2000,
        quantity: 1,
        product: {
          name: "Product 2",
        },
      },
    ],
    totalInCents: 4000,
  });
});
