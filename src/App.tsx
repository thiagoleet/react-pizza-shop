import { RouterProvider } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Toaster } from "sonner";

import { router } from "./Routes";

import "./global.css";

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | Pizza Shop" />
      <Toaster richColors />
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}
