import { expect, test } from "@playwright/test";

test("homepage exposes accessible learning pathways on desktop and mobile", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/", { waitUntil: "domcontentloaded" });

  await expect(page.getByRole("heading", { name: /real engineers/i })).toBeVisible();

  // Keep smoke coverage aligned with the current PaperAudienceRouting homepage section.
  const pathways = page.locator("#course-storytelling");
  await expect(pathways).toBeAttached();
  await pathways.scrollIntoViewIfNeeded();
  await expect(
    pathways.getByRole("heading", { name: /three structured pathways to/i })
  ).toBeVisible();
  await expect(pathways.getByRole("heading", { name: /campus crt training/i })).toBeVisible();
  const workshopLink = pathways.getByRole("link", { name: /explore workshops/i });
  await expect(workshopLink).toBeVisible();

  await page.setViewportSize({ width: 375, height: 812 });
  await workshopLink.scrollIntoViewIfNeeded();
  await expect(workshopLink).toBeVisible();
});

test("failed login never fabricates a client session", async ({ page }) => {
  await page.route("**/api/users/login", (route) => route.abort());
  await page.goto("/login", { waitUntil: "domcontentloaded" });

  await page.locator('input[name="email"]').fill("demo@thaksaai.in");
  await page.locator('input[name="password"]').fill("not-a-real-password");
  await page.getByRole("button", { name: /sign in/i }).click();

  await expect.poll(() => page.evaluate(() => localStorage.getItem("token"))).toBeNull();
  await expect.poll(() => page.evaluate(() => localStorage.getItem("user"))).toBeNull();
});
