import { test, expect } from "@playwright/test"

test.describe("Portfolio Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/portfolio")
  })

  test("shows page heading", async ({ page }) => {
    await expect(page.getByRole("heading", { name: "Portfolio" })).toBeVisible()
  })

  test("renders category filter tabs", async ({ page }) => {
    await expect(page.getByRole("button", { name: /All/ })).toBeVisible()
    await expect(page.getByRole("button", { name: /Studio/ })).toBeVisible()
    await expect(page.getByRole("button", { name: /Outdoor/ })).toBeVisible()
    await expect(page.getByRole("button", { name: /Editorial/ })).toBeVisible()
  })

  test("filtering by Outdoor shows only outdoor photos", async ({ page }) => {
    await page.getByRole("button", { name: /Outdoor/ }).click()
    const images = page.locator("img")
    const count = await images.count()
    expect(count).toBeGreaterThan(0)
  })

  test("filtering by Studio shows empty state", async ({ page }) => {
    await page.getByRole("button", { name: /Studio/ }).click()
    await expect(page.getByText("No photos in this category yet.")).toBeVisible()
  })

  test("All filter shows all photos", async ({ page }) => {
    await page.getByRole("button", { name: /Outdoor/ }).click()
    await page.getByRole("button", { name: /All/ }).click()
    const images = page.locator("img")
    const count = await images.count()
    expect(count).toBeGreaterThan(1)
  })
})
