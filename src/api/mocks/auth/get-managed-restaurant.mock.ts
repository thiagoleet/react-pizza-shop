import { http, HttpResponse } from "msw";
import { GetManagedRestaurantResponse } from "@/api/auth/get-managed-restaurant";

export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedRestaurantResponse
>("/managed-restaurant", async () => {
  return HttpResponse.json({
    id: "custom-restaurant-id",
    name: "Pizza Shop",
    description: "The best pizza in town",
    managerId: "custom-user-id",
    createdAt: new Date(),
    updatedAt: new Date(),
  });
});
