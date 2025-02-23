import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { Button } from "../ui/button";

export interface PaginationProps {
  pageIndex: number;
  totalCount: number;
  perPage: number;
  onPageChange: (pageIndex: number) => Promise<void> | void;
}

export function Pagination({
  pageIndex,
  totalCount,
  perPage,
  onPageChange,
}: PaginationProps) {
  const pages = Math.ceil(totalCount / perPage);

  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-muted-foreground">
        Total de {totalCount} {totalCount === 1 ? "item" : "itens"}
      </span>

      <div className="flex items-center gap-6 lg:gap-8">
        <div className="text-sm font-medium">
          Página {pageIndex + 1} de {pages}
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="xs"
            className="h-8 w-9 p-0"
            onClick={() => onPageChange(0)}
            disabled={pageIndex === 0}
          >
            <ChevronsLeft className="h-4 w-4" />
            <span className="sr-only">Primeira Página</span>
          </Button>
          <Button
            variant="outline"
            size="xs"
            className="h-8 w-9 p-0"
            onClick={() => onPageChange(pageIndex - 1)}
            disabled={pageIndex === 0}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Página Anterior</span>
          </Button>
          <Button
            variant="outline"
            size="xs"
            className="h-8 w-9 p-0"
            onClick={() => onPageChange(pageIndex + 1)}
            disabled={pageIndex === pages - 1}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Próxima Página</span>
          </Button>
          <Button
            variant="outline"
            size="xs"
            className="h-8 w-9 p-0"
            onClick={() => onPageChange(pages - 1)}
            disabled={pageIndex === pages - 1}
          >
            <ChevronsRight className="h-4 w-4" />
            <span className="sr-only">Última Página</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
