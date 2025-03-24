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

test("filter by order id", async ({ page }) => {
  await page.goto("/orders", { waitUntil: "networkidle" });

  await page.getByRole("textbox", { name: "ID do Pedido" }).fill("order-66");

  await page.getByRole("button", { name: "Filtrar resulados" }).click();

  await page.waitForLoadState("networkidle");

  expect(
    page.getByRole("cell", { name: "order-66", exact: true })
  ).toBeVisible();
});

test("filter by customer name", async ({ page }) => {
  await page.goto("/orders", { waitUntil: "networkidle" });

  await page
    .getByRole("textbox", { name: "Nome do cliente" })
    .fill("Customer 11");

  await page.getByRole("button", { name: "Filtrar resulados" }).click();

  await page.waitForLoadState("networkidle");

  expect(
    page.getByRole("cell", { name: "Customer 11 ", exact: true })
  ).toBeVisible();
});

test("filter by status", async ({ page }) => {
  await page.goto("/orders", { waitUntil: "networkidle" });

  await page.getByRole("combobox").click();

  await page.waitForTimeout(1000);

  await page.getByRole("option", { name: "Entregue" }).click();

  await page.getByRole("button", { name: "Filtrar resulados" }).click();

  await page.waitForLoadState("networkidle");

  const tableRows = await page.getByRole("cell", { name: "Entregue" }).all();

  expect(tableRows).toHaveLength(10);
});
