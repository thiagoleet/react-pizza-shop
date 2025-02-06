import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const signInFormSchema = z.object({
  email: z.string().email(),
});

type SignInForm = z.infer<typeof signInFormSchema>;

export function SignInPage() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>();

  async function handleSignIn(data: SignInForm) {
    console.log(data);

    toast.success("Enviamos um link de autenticação para o seu e-mail", {
      action: {
        label: "Reenviar link",
        onClick: () => {
          handleSignIn(data);
        },
      },
    });
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
