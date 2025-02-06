import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Helmet } from "react-helmet-async";

export function SignInPage() {
  return (
    <>
      <Helmet title="Login" />
      <main className="p-8">
        <div className="w-[320px] flex flex-col justify-center gap-6">
          <header className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar Painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe suas vendas pelo painel do parceiro
            </p>
          </header>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input
                type="email"
                id="email"
                name="email"
              />
            </div>

            <Button
              className="w-full"
              type="submit"
            >
              Accessar Painel
            </Button>
          </form>
        </div>
      </main>
    </>
  );
}
