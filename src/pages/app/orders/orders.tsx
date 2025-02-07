import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";

import { getOrders } from "@/api/get-orders";
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

export function OrdersPage() {
  const { data: result } = useQuery({
    queryKey: ["orders"],
    queryFn: getOrders,
  });

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
              </TableBody>
            </Table>
          </div>
          <Pagination
            pageIndex={0}
            perPage={10}
            totalCount={105}
          />
        </section>
      </main>
    </>
  );
}
