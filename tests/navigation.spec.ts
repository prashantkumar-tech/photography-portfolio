import { test, expect } from "@playwright/test"

const pages = [
  { name: "Home", path: "/" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Gallery", path: "/gallery" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
]

test.describe("Navigation", () => {
  test("header is visible on all pages", async ({ page }) => {
    for (const { path } of pages) {
      await page.goto(path)
      await expect(page.locator("header")).toBeVisible()
    }
  })

  test("footer is visible on all pages", async ({ page }) => {
    for (const { path } of pages) {
      await page.goto(path)
      await expect(page.locator("footer")).toBeVisible()
    }
  })

  test("all pages load without errors", async ({ page }) => {
    for (const { path } of pages) {
      const response = await page.goto(path)
      expect(response?.status()).toBe(200)
    }
  })

  test("nav links navigate to the correct pages", async ({ page }) => {
    await page.goto("/")
    await page.getByRole("link", { name: "Portfolio" }).first().click()
    await expect(page).toHaveURL("/portfolio")

    await page.getByRole("link", { name: "Gallery" }).first().click()
    await expect(page).toHaveURL("/gallery")

    await page.getByRole("link", { name: "About" }).first().click()
    await expect(page).toHaveURL("/about")

    await page.getByRole("link", { name: "Services" }).first().click()
    await expect(page).toHaveURL("/services")

    await page.getByRole("link", { name: "Contact" }).first().click()
    await expect(page).toHaveURL("/contact")
  })

  test("logo navigates back to home", async ({ page }) => {
    await page.goto("/portfolio")
    await page.locator("header a").first().click()
    await expect(page).toHaveURL("/")
  })
})
