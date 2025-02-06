import { RouterProvider } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Toaster } from "sonner";
import { QueryClientProvider } from "@tanstack/react-query";

import { router } from "@/Routes";
import { queryClient } from "@/lib/react-query";
import { ThemeProvider } from "@/components/theme/theme-provider";

import "@/global.css";

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider
        storageKey="pizza-shop:theme"
        defaultTheme="dark"
      >
        <Helmet titleTemplate="%s | Pizza Shop" />
        <Toaster richColors />
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}
