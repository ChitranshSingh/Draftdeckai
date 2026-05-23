import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const pagesToTest = [
  '/',
  '/resume',
  '/pricing',
  '/login'
];

test.describe('Color Contrast & Accessibility', () => {
  for (const path of pagesToTest) {
    test(`Should pass WCAG AA on ${path}`, async ({ page }) => {
      await page.goto(path);
      // Wait for the page to be fully loaded
      await page.waitForLoadState('networkidle');

      // Analyze page with axe-core focusing on contrast
      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze();

      // Filter for contrast-specific violations if we want to isolate them, 
      // but testing all wcag2aa violations is better for a11y compliance.
      const violations = accessibilityScanResults.violations;
      
      if (violations.length > 0) {
        console.log(`Violations on ${path}:`, JSON.stringify(violations, null, 2));
      }

      expect(violations).toEqual([]);
    });
  }
});
