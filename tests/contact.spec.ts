import { test, expect } from "@playwright/test"

test.describe("Contact Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/contact")
  })

  test("shows page heading", async ({ page }) => {
    await expect(page.getByRole("heading", { name: "Contact" })).toBeVisible()
  })

  test("renders all form fields", async ({ page }) => {
    await expect(page.getByPlaceholder("Jane Smith")).toBeVisible()
    await expect(page.getByPlaceholder("jane@example.com")).toBeVisible()
    await expect(page.getByPlaceholder(/\+1/)).toBeVisible()
    await expect(page.getByPlaceholder(/Tell me about yourself/)).toBeVisible()
  })

  test("shows validation errors when submitting empty form", async ({ page }) => {
    await page.getByRole("button", { name: "Send Message" }).click()
    await expect(page.getByText("Name must be at least 2 characters")).toBeVisible()
    await expect(page.getByText("Please enter a valid email address")).toBeVisible()
    await expect(page.getByText("Message must be at least 10 characters")).toBeVisible()
  })

  test("shows error for invalid email", async ({ page }) => {
    await page.getByPlaceholder("Jane Smith").fill("Test User")
    await page.getByPlaceholder("jane@example.com").fill("not-an-email")
    await page.getByRole("button", { name: "Send Message" }).click()
    await expect(page.getByText("Please enter a valid email address")).toBeVisible()
  })

  test("submit button is disabled while sending", async ({ page }) => {
    await page.getByPlaceholder("Jane Smith").fill("Test User")
    await page.getByPlaceholder("jane@example.com").fill("test@example.com")
    await page.getByPlaceholder(/Tell me about yourself/).fill("This is a test message that is long enough.")
    await page.locator("select").selectOption("Studio Portrait")

    // Intercept the API call to simulate delay
    await page.route("/api/contact", async (route) => {
      await new Promise((r) => setTimeout(r, 500))
      await route.fulfill({ json: { success: true } })
    })

    await page.getByRole("button", { name: "Send Message" }).click()
    await expect(page.getByRole("button", { name: "Sending..." })).toBeDisabled()
  })

  test("shows success state after valid submission", async ({ page }) => {
    await page.route("/api/contact", (route) =>
      route.fulfill({ json: { success: true } })
    )

    await page.getByPlaceholder("Jane Smith").fill("Test User")
    await page.getByPlaceholder("jane@example.com").fill("test@example.com")
    await page.locator("select").selectOption("Studio Portrait")
    await page.getByPlaceholder(/Tell me about yourself/).fill("This is a test message that is long enough.")
    await page.getByRole("button", { name: "Send Message" }).click()

    await expect(page.getByText("Message Sent")).toBeVisible()
  })
})
