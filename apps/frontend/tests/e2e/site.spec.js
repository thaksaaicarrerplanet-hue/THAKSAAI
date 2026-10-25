import { expect, test } from "@playwright/test";

test("homepage exposes accessible learning pathways on desktop and mobile", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/", { waitUntil: "domcontentloaded" });

  await expect(page.getByRole("heading", { name: /real engineers/i })).toBeVisible();

  const reactor = page.locator("#capability-reactor");
  await reactor.scrollIntoViewIfNeeded();
  await expect(reactor.getByText("Reduced-motion mode")).toBeVisible();

  const moduleButtons = reactor.locator('button[aria-pressed]');
  await expect(moduleButtons).toHaveCount(4);
  await moduleButtons.nth(1).click();
  await expect(moduleButtons.nth(1)).toHaveAttribute("aria-pressed", "true");
  await expect(reactor.getByRole("heading", { name: /campus recruitment training/i })).toBeVisible();

  await page.setViewportSize({ width: 375, height: 812 });
  await expect(moduleButtons.nth(1)).toBeVisible();
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
