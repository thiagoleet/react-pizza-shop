import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  getManagedRestaurant,
  GetManagedRestaurantResponse,
} from "@/api/auth/get-managed-restaurant";
import {
  storeProfileSchema,
  StoreProfileSchema,
} from "@/schemas/store-profile.schema";
import { updateProfile } from "@/api/auth/update-profile";

export function StoreProfileDialog() {
  const queryClient = useQueryClient();

  const updateManagedRestaurantCache = ({
    name,
    description,
  }: StoreProfileSchema) => {
    const cached = queryClient.getQueryData<GetManagedRestaurantResponse>([
      "managed-restaurant",
    ]);

    if (cached) {
      queryClient.setQueryData<GetManagedRestaurantResponse>(
        ["managed-restaurant"],
        {
          ...cached,
          name,
          description,
        }
      );
    }

    return { cached };
  };

  const { data: managedRestaurant, isLoading: isLoadingManagedRestaurant } =
    useQuery({
      queryKey: ["managed-restaurant"],
      queryFn: getManagedRestaurant,
    });

  const { mutateAsync: updateProfileFn } = useMutation({
    mutationFn: updateProfile,
    onMutate({ name, description }) {
      const { cached } = updateManagedRestaurantCache({ name, description });

      return { previousProfile: cached };
    },
    onError(_, __, context) {
      if (context?.previousProfile) {
        updateManagedRestaurantCache(context.previousProfile);
      }
    },
  });

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<StoreProfileSchema>({
    resolver: zodResolver(storeProfileSchema),
    values: {
      name: managedRestaurant?.name ?? "",
      description: managedRestaurant?.description ?? "",
    },
  });

  async function handleUpdateProfile({
    name,
    description,
  }: StoreProfileSchema) {
    try {
      await updateProfileFn({ name, description });

      toast.success("Perfil da loja atualizado com sucesso");
    } catch (error) {
      console.error(error);

      toast.error("Não foi possível atualizar o perfil da loja");
    }
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Perfil da Loja</DialogTitle>
        <DialogDescription>
          Atualize as informações do seu estabelecimento visíveis ao seu cliente
        </DialogDescription>
      </DialogHeader>

      <form onSubmit={handleSubmit(handleUpdateProfile)}>
        <div className="space-y-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label
              className="text-right"
              htmlFor="name"
            >
              Nome
            </Label>
            <Input
              type="text"
              id="name"
              className="col-span-3"
              {...register("name")}
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label
              className="text-right"
              htmlFor="description"
            >
              Descrição
            </Label>
            <Textarea
              id="description"
              className="col-span-3"
              {...register("description")}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              variant="ghost"
              type="button"
            >
              Cancelar
            </Button>
          </DialogClose>
          <Button
            type="submit"
            variant="success"
            disabled={isLoadingManagedRestaurant || isSubmitting}
          >
            Salvar
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
}
