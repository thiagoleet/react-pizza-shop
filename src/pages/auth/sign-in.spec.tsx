import { render } from "@testing-library/react";
import { SignInPage } from "./sign-in";
import { MemoryRouter } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/react-query";
import { HelmetProvider } from "react-helmet-async";

describe("SiginPage", () => {
  it("should set default email input if email is present on search params", () => {
    const wrapper = render(<SignInPage />, {
      wrapper: ({ children }) => {
        return (
          <HelmetProvider>
            <MemoryRouter
              initialEntries={["/sign-in?email=john.doe@example.com"]}
            >
              <QueryClientProvider client={queryClient}>
                {children}
              </QueryClientProvider>
            </MemoryRouter>
          </HelmetProvider>
        );
      },
    });

    const emailInput = wrapper.getByLabelText("Seu e-mail") as HTMLInputElement;

    expect(emailInput.value).toEqual("john.doe@example.com");
  });
});
