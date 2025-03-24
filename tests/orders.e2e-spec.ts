import { test, expect } from "@playwright/test";

test("list orders", async ({ page }) => {
  await page.goto("/orders", { waitUntil: "networkidle" });

  expect(
    page.getByRole("cell", { name: "order-1", exact: true })
  ).toBeVisible();

  expect(
    page.getByRole("cell", { name: "order-10", exact: true })
  ).toBeVisible();
});

test("paginate orders", async ({ page }) => {
  await page.goto("/orders", { waitUntil: "networkidle" });

  await page.getByRole("button", { name: "Próxima Página" }).click();

  await page.waitForLoadState("networkidle");

  expect(
    page.getByRole("cell", { name: "order-11", exact: true })
  ).toBeVisible();

  expect(
    page.getByRole("cell", { name: "order-20", exact: true })
  ).toBeVisible();

  await page.getByRole("button", { name: "Última Página" }).click();

  await page.waitForLoadState("networkidle");

  expect(
    page.getByRole("cell", { name: "order-61", exact: true })
  ).toBeVisible();

  expect(
    page.getByRole("cell", { name: "order-66", exact: true })
  ).toBeVisible();

  await page.getByRole("button", { name: "Página Anterior" }).click();

  await page.waitForLoadState("networkidle");

  expect(
    page.getByRole("cell", { name: "order-51", exact: true })
  ).toBeVisible();

  expect(
    page.getByRole("cell", { name: "order-60", exact: true })
  ).toBeVisible();

  await page.getByRole("button", { name: "Primeira Página" }).click();

  await page.waitForLoadState("networkidle");

  expect(
    page.getByRole("cell", { name: "order-1", exact: true })
  ).toBeVisible();

  expect(
    page.getByRole("cell", { name: "order-10", exact: true })
  ).toBeVisible();
});
