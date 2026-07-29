import { readFileSync, writeFileSync } from 'fs';

const themePath = 'apps/frontend/src/theme/appTheme.js';
let themeCode = readFileSync(themePath, 'utf8');

themeCode = themeCode.replace(
  /const bodyFont = "\\\"Roboto\\\", sans-serif";/,
  'const bodyFont = "\\"AvertaStd\\", -apple-system, BlinkMacSystemFont, sans-serif";'
);
themeCode = themeCode.replace(
  /const headingFont = "\\\"Roboto\\\", sans-serif";/,
  'const headingFont = "\\"AvertaStd\\", -apple-system, BlinkMacSystemFont, sans-serif";'
);

// Update button border radius to 16px
themeCode = themeCode.replace(
  /borderRadius: 8,/g,
  'borderRadius: 16,'
);

// Inputs 16px
if (!themeCode.includes('MuiOutlinedInput')) {
  const muiInputCode = `
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        }
      }
    },
    MuiCard: {`;
  themeCode = themeCode.replace(/MuiCard: \{/, muiInputCode);
}


writeFileSync(themePath, themeCode);
