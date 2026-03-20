import { test, expect } from "@playwright/test"

test.describe("Gallery Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/gallery")
  })

  test("shows page heading", async ({ page }) => {
    await expect(page.getByRole("heading", { name: "Gallery" })).toBeVisible()
  })

  test("renders photos in the grid", async ({ page }) => {
    const images = page.locator("img")
    const count = await images.count()
    expect(count).toBeGreaterThan(0)
  })

  test("clicking a photo opens the lightbox", async ({ page }) => {
    await page.locator(".break-inside-avoid").first().click()
    await expect(page.locator(".fixed.inset-0")).toBeVisible()
  })

  test("lightbox closes on ESC key", async ({ page }) => {
    await page.locator(".break-inside-avoid").first().click()
    await expect(page.locator(".fixed.inset-0")).toBeVisible()
    await page.keyboard.press("Escape")
    await expect(page.locator(".fixed.inset-0")).not.toBeVisible()
  })

  test("lightbox closes on clicking the close button", async ({ page }) => {
    await page.locator(".break-inside-avoid").first().click()
    await page.getByLabel("Close").click()
    await expect(page.locator(".fixed.inset-0")).not.toBeVisible()
  })

  test("lightbox navigates to next photo with arrow button", async ({ page }) => {
    await page.locator(".break-inside-avoid").first().click()
    const firstSrc = await page.locator(".fixed.inset-0 img").getAttribute("src")
    await page.getByLabel("Next photo").click()
    const secondSrc = await page.locator(".fixed.inset-0 img").getAttribute("src")
    expect(firstSrc).not.toBe(secondSrc)
  })

  test("lightbox navigates with keyboard arrow keys", async ({ page }) => {
    await page.locator(".break-inside-avoid").first().click()
    const firstSrc = await page.locator(".fixed.inset-0 img").getAttribute("src")
    await page.keyboard.press("ArrowRight")
    const nextSrc = await page.locator(".fixed.inset-0 img").getAttribute("src")
    expect(firstSrc).not.toBe(nextSrc)
  })
})
