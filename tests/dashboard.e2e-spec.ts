import { test, expect } from "@playwright/test";

test("display day orders amount metric", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  expect(page.getByTestId("day-orders-amount")).toBeVisible();
  expect(page.getByTestId("day-orders-amount-diff")).toBeVisible();
});

test("display month orders amount metric", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  expect(page.getByTestId("month-orders-amount")).toBeVisible();
  expect(page.getByTestId("month-orders-amount-diff")).toBeVisible();
});

test("display month canceled amount metric", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  expect(page.getByTestId("month-canceled-amount")).toBeVisible();
  expect(page.getByTestId("month-canceled-amount-diff")).toBeVisible();
});

test("display month revenue amount metric", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  expect(page.getByTestId("month-revenue-amount")).toBeVisible();
  expect(page.getByTestId("month-revenue-amount-diff")).toBeVisible();
});
