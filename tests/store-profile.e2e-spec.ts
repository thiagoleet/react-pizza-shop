import { test, expect } from "@playwright/test";

test("update profile successfully", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  await page.getByRole("button", { name: "Pizza Shop" }).click();

  await page.getByRole("menuitem", { name: "Perfil da Loja" }).click();

  await page.getByRole("textbox", { name: "Nome" }).fill("Rocket Pizza");

  await page
    .getByRole("textbox", { name: "Descrição" })
    .fill("Another Description");

  await page.getByRole("button", { name: "Salvar" }).click();

  await page.waitForLoadState("networkidle");

  const toast = page.getByText("Perfil da loja atualizado com sucesso");

  await page.waitForTimeout(1000);

  expect(toast).toBeVisible();

  await page.getByRole("button", { name: "Close" }).click();

  await page.waitForTimeout(250);

  expect(page.getByRole("button", { name: "Rocket Pizza" })).toBeVisible();
});
