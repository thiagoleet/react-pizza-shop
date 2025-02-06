import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SignInForm } from "@/models/sign-in.schema";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "@/api/sign-in";

export function SignInPage() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>();

  const { mutateAsync: authenticate } = useMutation({
    mutationFn: signIn,
  });

  async function handleSignIn({ email }: SignInForm) {
    try {
      await authenticate({ email });

      toast.success("Enviamos um link de autenticação para o seu e-mail", {
        action: {
          label: "Reenviar link",
          onClick: () => {
            handleSignIn({ email });
          },
        },
      });
    } catch (error) {
      console.error(error);

      toast.error("Não foi possível enviar o link de autenticação", {
        action: {
          label: "Tentar novamente?",
          onClick: () => {
            handleSignIn({ email });
          },
        },
      });
    }
  }

  return (
    <>
      <Helmet title="Login" />
      <main className="p-8">
        <Button
          className="absolute right-8 top-8"
          variant="ghost"
          asChild
        >
          <Link to="/sign-up">Novo Estabelecimento</Link>
        </Button>

        <div className="w-[320px] flex flex-col justify-center gap-6">
          <header className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar Painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe suas vendas pelo painel do parceiro
            </p>
          </header>
          <form
            onSubmit={handleSubmit(handleSignIn)}
            className="space-y-4"
          >
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input
                type="email"
                {...register("email", { required: true })}
              />
            </div>

            <Button
              className="w-full"
              type="submit"
              disabled={isSubmitting}
            >
              Accessar Painel
            </Button>
          </form>
        </div>
      </main>
    </>
  );
}
