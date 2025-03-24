import { test, expect } from "@playwright/test";

test("sign-up successfully", async ({ page }) => {
  await page.goto("/sign-up", { waitUntil: "networkidle" });

  await page.getByText("Nome do estabelecimento").fill("Pizza Shop");
  await page.getByText("Seu nome").fill("John Doe");
  await page.getByText("Seu e-mail").fill("john.doe@email.com");
  await page.getByText("Seu celular").fill("11999999999");

  await page.getByRole("button", { name: "Finalizar Cadastro" }).click();

  const toast = page.getByText("Restaurente cadastrado com sucesso");

  expect(toast).toBeVisible();

  await page.waitForTimeout(2000);
});

test("sign-up with error", async ({ page }) => {
  await page.goto("/sign-up", { waitUntil: "networkidle" });

  await page
    .getByText("Nome do estabelecimento")
    .fill("Invalid Restaurant Name");
  await page.getByText("Seu nome").fill("John Doe");
  await page.getByText("Seu e-mail").fill("john.doe@email.com");
  await page.getByText("Seu celular").fill("11999999999");

  await page.getByRole("button", { name: "Finalizar Cadastro" }).click();

  const toast = page.getByText("Não foi possível cadastrar o restaurante");

  expect(toast).toBeVisible();

  await page.waitForTimeout(2000);
});

test("navigate to login page", async ({ page }) => {
  await page.goto("/sign-up", { waitUntil: "networkidle" });

  await page.getByRole("link", { name: "Fazer Login" }).click();

  expect(page.url()).toContain("sign-in");
});
