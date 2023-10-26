import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("homepage", () => {
  test("has title", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle(/Breadchain/);
  });

  test("should not have any automatically detectable accessibility issues", async ({
    page,
  }) => {
    await page.goto("/"); // 3

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); // 4

    expect(accessibilityScanResults.violations.length).toEqual(0); // 5
  });
});

// test("should not have any automatically detectable WCAG A or AA violations", async ({
//   page,
// }) => {
//   await page.goto("/");

//   const accessibilityScanResults = await new AxeBuilder({ page })
//     .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
//     .analyze();

//   expect(accessibilityScanResults.violations).toEqual([]);
// });
