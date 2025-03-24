import { test, expect } from "@playwright/test";

test("sign-in successfully", async ({ page }) => {
  await page.goto("/sign-in", { waitUntil: "networkidle" });

  await page.getByText("Seu e-mail").fill("john.doe@example.com");

  await page.getByRole("button", { name: "Accessar Painel" }).click();

  const toast = page.getByText(
    "Enviamos um link de autenticação para o seu e-mail"
  );

  await expect(toast).toBeVisible();

  await page.waitForTimeout(2000);
});

test("sign-in with wrong credentials", async ({ page }) => {
  await page.goto("/sign-in", { waitUntil: "networkidle" });

  await page.getByText("Seu e-mail").fill("wrong-email@example.com");

  await page.getByRole("button", { name: "Accessar Painel" }).click();

  const toast = page.getByText(
    "Não foi possível enviar o link de autenticação"
  );

  await expect(toast).toBeVisible();

  await page.waitForTimeout(2000);
});

test("navigate to new restaurant page", async ({ page }) => {
  await page.goto("/sign-in", { waitUntil: "networkidle" });

  await page.getByRole("link", { name: "Novo Estabelecimento" }).click();

  expect(page.url()).toContain("sign-up");
});
