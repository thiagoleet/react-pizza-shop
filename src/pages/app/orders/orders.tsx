import { Helmet } from "react-helmet-async";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, X } from "lucide-react";

export function OrdersPage() {
  return (
    <>
      <Helmet title="Pedidos" />
      <main className="flex flex-col gap-4">
        <header>
          <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
        </header>

        <section className="space-y-2.5">
          <form className="flex items-center gap-2">
            <span className="text-sm font-semibold">Filtros:</span>
            <Input
              placeholder="Nome do cliente"
              className="h-8 w-[320px]"
            />
          </form>

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
                {Array.from({ length: 10 }).map((_, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Button
                        variant="outline"
                        size="xs"
                      >
                        <Search className="h-3 w-3" />
                        <span className="sr-only">Detalhes do pedido</span>
                      </Button>
                    </TableCell>
                    <TableCell className="font-mono text-xs font-medium">
                      123456
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      Há 15 minutos
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                        <span className="font-medium text-muted-foreground">
                          Pendente
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">John Doe</TableCell>
                    <TableCell className="font-medium">R$ 123,45</TableCell>
                    <TableCell>
                      <Button
                        variant="outline"
                        size="xs"
                      >
                        <ArrowRight className="h-3 w-3 mr-2" />
                        Aprovar
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="ghost"
                        size="xs"
                      >
                        <X className="h-3 w-3 mr-2" />
                        Cancelar
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>
      </main>
    </>
  );
}
