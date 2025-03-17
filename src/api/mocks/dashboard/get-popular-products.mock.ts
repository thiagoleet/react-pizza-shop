import { http, HttpResponse } from "msw";
import { metrics } from "../../constants/metrics";
import { GetPopularProductsResponse } from "@/api/dashboard/get-popular-products";

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>(metrics.popularProducts, async () => {
  return HttpResponse.json([
    {
      product: "Café",
      amount: 10,
    },
    {
      product: "Pão de queijo",
      amount: 5,
    },
    {
      product: "Coxinha",
      amount: 3,
    },
  ]);
});
