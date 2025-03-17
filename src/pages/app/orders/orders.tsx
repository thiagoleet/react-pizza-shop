import { Helmet } from "react-helmet-async";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { z } from "zod";

import { getOrders } from "@/api/orders/get-orders";
import { Pagination } from "@/components/pagination";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { OrderTableRow } from "./order-table-row";
import { OrderTableFilters } from "./order-table-filters";
import { OrderTableSkeleton } from "./order-table-skeleton";

export function OrdersPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const orderId = searchParams.get("orderId") ?? "";
  const customerName = searchParams.get("customerName") ?? "";
  const status = searchParams.get("status") ?? "all";

  const pageIndex = z.coerce
    .number()
    .transform((page) => page - 1)
    .parse(searchParams.get("pageIndex") ?? "1");

  const { data: result, isLoading: isLoadingOrders } = useQuery({
    queryKey: ["orders", pageIndex, orderId, customerName, status],
    queryFn: () =>
      getOrders({
        pageIndex,
        orderId,
        customerName,
        status: status === "all" ? undefined : status,
      }),
  });

  function handlePaginate(pageIndex: number) {
    setSearchParams((state) => {
      state.set("pageIndex", String(pageIndex + 1));
      return state;
    });
  }

  return (
    <>
      <Helmet title="Pedidos" />
      <main className="flex flex-col gap-4">
        <header>
          <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
        </header>

        <section className="space-y-2.5">
          <OrderTableFilters />

          <div className="border rounded-md">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[64px]" />
                  <TableHead className="w-[140px]">Idendificador</TableHead>
                  <TableHead className="w-[180px]">Realizado há</TableHead>
                  <TableHead className="w-[140px]">Status</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead className="w-[140px]">Total do Pedido</TableHead>
                  <TableHead className="w-[164px]" />
                  <TableHead className="w-[164px]" />
                </TableRow>
              </TableHeader>

              <TableBody>
                {result &&
                  result.orders.map((order) => (
                    <OrderTableRow
                      key={order.orderId}
                      order={order}
                    />
                  ))}

                {isLoadingOrders && <OrderTableSkeleton />}
              </TableBody>
            </Table>
          </div>

          {result && (
            <Pagination
              pageIndex={pageIndex}
              perPage={result.meta.perPage}
              totalCount={result.meta.totalCount}
              onPageChange={handlePaginate}
            />
          )}
        </section>
      </main>
    </>
  );
}
