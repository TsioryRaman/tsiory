import { extendTheme } from "@chakra-ui/react";

const theme = {
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  fonts: {
    heading: `"Space Grotesk", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`,
    body: `"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`,
    mono: `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`,
  },
  semanticTokens: {
    colors: {
      page: { default: "#FAF9F6", _dark: "#121211" },
      surface: { default: "#F3F1EA", _dark: "#1A1A18" },
      ink: { default: "#141413", _dark: "#EDEAE3" },
      muted: { default: "#6B6862", _dark: "#9A968C" },
      rule: { default: "#E2DFD8", _dark: "#2C2B27" },
      accent: { default: "#1D4ED8", _dark: "#8AA6FF" },
    },
  },
  radii: {
    none: "0",
    sm: "2px",
    base: "2px",
    md: "3px",
    lg: "4px",
    xl: "6px",
    "2xl": "8px",
    "3xl": "10px",
    full: "9999px",
  },
  shadows: {
    xs: "none",
    sm: "none",
    base: "none",
    md: "none",
    lg: "none",
    xl: "none",
    "2xl": "none",
    outline: "0 0 0 1px #1D4ED8",
  },
  styles: {
    global: {
      "html, body": {
        bg: "page",
        color: "ink",
      },
      "::selection": {
        bg: "accent",
        color: "#FAF9F6",
      },
      "*:focus-visible": {
        outline: "2px solid",
        outlineColor: "accent",
        outlineOffset: "3px",
      },
    },
  },
};

export default extendTheme(theme);
