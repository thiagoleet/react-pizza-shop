import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <>
      <Helmet title="Página não encontrada" />
      <main className="flex flex-col h-screen items-center justify-center gap-2">
        <h1 className="text-4xl font-bold">Página não encontrada</h1>
        <p className="text-accent-foreground">
          Voltar para o{" "}
          <Link
            to="/"
            className="text-sky-500 dark:text-sky-400"
          >
            Dashboard
          </Link>
        </p>
      </main>
    </>
  );
}
