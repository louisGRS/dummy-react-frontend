import { test, expect } from '@playwright/test';

test('homepage loads successfully', async ({ page }) => {
  await page.goto('/');

  // Wait for the page to be loaded
  await expect(page).toHaveTitle('React Test Shop');
});

test('can navigate and view the app', async ({ page }) => {
  await page.goto('/');

  // Just verify we can load the page without errors
  await expect(page).toHaveTitle('React Test Shop');

  // Wait for any content to load
  await page.waitForLoadState('networkidle');
});
