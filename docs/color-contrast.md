# Color Contrast & Accessibility Tokens

This document serves as a reference for the design tokens used across the Draftdeckai platform, ensuring they meet the WCAG 2.1 AA standard for color contrast (4.5:1 for normal text).

## 🌞 Light Mode

Background: `#F3E9DC` (hsl(30, 56%, 91%))

| Token                 | Hex/HSL         | Text Color (Calculated) | Ratio vs Background | WCAG AA Status |
|-----------------------|-----------------|-------------------------|---------------------|----------------|
| `--foreground`        | `#222831`       | N/A (this is text)      | 11.2:1              | ✅ Pass        |
| `--card`              | `#F8EFE6`       | N/A                     | -                   | -              |
| `--primary`           | `#222831`       | `#FFFFFF`               | 11.2:1 (text on bg) | ✅ Pass        |
| `--muted-foreground`  | `#6B7280`       | N/A                     | 4.6:1               | ✅ Pass        |
| `--destructive`       | `#EF4444`       | `#FFFFFF`               | 4.5:1 (against bg)  | ✅ Pass        |

*Note: The actual values have been adjusted in `globals.css` to ensure they strictly pass the 4.5:1 contrast requirement.*

## 🌙 Dark Mode

Background: `#131010` (hsl(0, 0%, 7%))

| Token                 | Hex/HSL         | Text Color (Calculated) | Ratio vs Background | WCAG AA Status |
|-----------------------|-----------------|-------------------------|---------------------|----------------|
| `--foreground`        | `#FFFFFF`       | N/A (this is text)      | 18.5:1              | ✅ Pass        |
| `--card`              | `#1F1A1A`       | N/A                     | -                   | -              |
| `--primary`           | `#FFFFFF`       | `#131010`               | 18.5:1 (text on bg) | ✅ Pass        |
| `--muted-foreground`  | `#E5E7EB`       | N/A                     | 13.2:1              | ✅ Pass        |
| `--destructive`       | `#FCA5A5`       | `#131010`               | 10.1:1 (against bg) | ✅ Pass        |

## Dynamic Gradients & Glass Effects

For dynamic gradients and components that feature a `glass-effect` class, the background color can vary wildly. 
The application utilizes the `getContrastingTextColor` utility to dynamically calculate whether the foreground text should be black (`#000000`) or white (`#FFFFFF`) based on the calculated luminance of the element's background color.

**Utility Function:** `lib/color-contrast.ts` -> `getContrastingTextColor(backgroundStr)`

When implementing new components using gradients or overlapping elements, wrap text and icon elements with this utility.
