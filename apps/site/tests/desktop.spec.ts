import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.use({
  viewport: { width: 1200, height: 800 },
});

test.describe("desktop - homepage", () => {
  test("should not have any automatically detectable accessibility issues", async ({
    page,
  }) => {
    await page.goto("/");

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
