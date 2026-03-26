import { test, expect } from '@playwright/test';

test('example test', async ({ page }) => {
  const secret = process.env.ADMIN_USERNAME;

  console.log('Secret value:', secret);

  // Simple validation
  expect(secret).toBeDefined();
  expect(secret).not.toBe('');

  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example/);
});
