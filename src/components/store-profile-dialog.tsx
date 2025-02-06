import { DialogTitle } from "@radix-ui/react-dialog";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function StoreProfileDialog() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Perfil da Loja</DialogTitle>
        <DialogDescription>
          Atualize as informações do seu estabelecimento visíveis ao seu cliente
        </DialogDescription>
      </DialogHeader>

      <form>
        <div className="space-y-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label
              className="text-right"
              htmlFor="name"
            >
              Nome
            </Label>
            <Input className="col-span-3" />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label
              className="text-right"
              htmlFor="description"
            >
              Descrição
            </Label>
            <Textarea className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button
            variant="ghost"
            type="button"
          >
            Cancelar
          </Button>
          <Button
            type="submit"
            variant="success"
          >
            Salvar
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
}
