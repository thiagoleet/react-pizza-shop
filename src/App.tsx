import { RouterProvider } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Toaster } from "sonner";

import { router } from "./Routes";
import { ThemeProvider } from "./components/theme/theme-provider";

import "./global.css";

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider
        storageKey="pizza-shop:theme"
        defaultTheme="dark"
      >
        <Helmet titleTemplate="%s | Pizza Shop" />
        <Toaster richColors />
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  );
}
