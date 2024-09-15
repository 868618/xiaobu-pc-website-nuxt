/** @type {import('tailwindcss').Config} */

const maxSpacingWidth = 1024;

const spacing: Record<string, string> = {};

for (let i = 0; i <= maxSpacingWidth; i++) {
  spacing[i] = `${i}px`;
}

const maxFontSize = 100;
const fontSize: Record<string, string> = {};

for (let i = 0; i <= maxFontSize; i++) {
  fontSize[i] = `${i}px`;
}

const maxLineHeight = 100;
const lineHeight: Record<string, string> = {};

for (let i = 0; i <= maxLineHeight; i++) {
  lineHeight[i] = `${i}px`;
}

const maxWidth = 3000;
const width: Record<string, string> = {};

for (let i = 0; i <= maxWidth; i++) {
  width[i] = `${i}px`;
}

const maxZIndex = 1000;

const zIndex: Record<string, number> = {};

for (let i = 0; i <= maxZIndex; i++) {
  zIndex[i] = i;
}

const maxHeight = 3000;

const height: Record<string, number> = {};

for (let i = 0; i <= maxHeight; i++) {
  height[i] = i;
}

export default {
  content: ["./pages/*.vue"],
  theme: {
    extend: {
      spacing,
      fontSize,
      lineHeight,
      borderRadius: {
        "6": "6px",
        "9": "9px",
        "40": "40px",
      },
      width,

      maxWidth: width,

      zIndex,
      height,
    },
  },
  plugins: [],

  mode: "jit",
};
