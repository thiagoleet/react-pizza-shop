import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SignUpForm } from "@/schemas/sign-up.schema";
import { registerRestaurant } from "@/api/auth/register-restaurant";

export function SignUpPage() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>();

  const { mutateAsync: registerRestaurantFn } = useMutation({
    mutationFn: registerRestaurant,
  });

  const navigate = useNavigate();

  async function handleSignUp({
    restaurantName,
    managerName,
    email,
    phone,
  }: SignUpForm) {
    try {
      await registerRestaurantFn({
        restaurantName,
        managerName,
        email,
        phone,
      });

      toast.success("Restaurente cadastrado com sucesso", {
        action: {
          label: "Login",
          onClick: () => {
            navigate(`/sign-in?email=${email}`);
          },
        },
      });
    } catch (error) {
      console.error(error);
      toast.error("Não foi possível cadastrar o restaurante");
    }
  }

  return (
    <>
      <Helmet title="Cadastre-se" />
      <main className="p-8">
        <Button
          className="absolute right-8 top-8"
          variant="ghost"
          asChild
        >
          <Link to="/sign-in">Fazer Login</Link>
        </Button>
        <div className="w-[320px] flex flex-col justify-center gap-6">
          <header className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Criar conta grátis
            </h1>
            <p className="text-sm text-muted-foreground">
              Seja um parceiro e comece suas vendas!
            </p>
          </header>
          <form
            onSubmit={handleSubmit(handleSignUp)}
            className="space-y-4"
          >
            <div className="space-y-2">
              <Label htmlFor="restaurantName">Nome do estabelecimento</Label>
              <Input
                type="text"
                {...register("restaurantName", { required: true })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="managerName">Seu nome</Label>
              <Input
                type="text"
                {...register("managerName", { required: true })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input
                type="email"
                {...register("email", { required: true })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Seu celular</Label>
              <Input
                type="tel"
                inputMode="tel"
                {...register("phone", { required: true })}
              />
            </div>

            <Button
              className="w-full"
              type="submit"
              disabled={isSubmitting}
            >
              Finalizar Cadastro
            </Button>

            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              Ao continuar, você concorda com os nossos
              <a
                className="underline underline-offset-4"
                href="#"
              >
                termos de serviço
              </a>{" "}
              e{" "}
              <a
                className="underline underline-offset-4"
                href="#"
              >
                política de privacidade
              </a>
              .
            </p>
          </form>
        </div>
      </main>
    </>
  );
}
