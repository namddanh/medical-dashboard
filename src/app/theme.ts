// Paint palette
export const theme = {
  colors: {
    bg: "#0b1220",
    surface: "#121a2b",
    text: "#e7eefc",
    textdark: "#000",
    muted: "#a9b4cc",
    border: "rgba(255, 255, 255, 0.12)",
    primary: "#4f8cff",
    secondary: "#2fa729",
    danger: "#ff4f6d",
  },
  space: {
    1: "4px",
    2: "8px",
    3: "12px",
    4: "16px",
    5: "24px",
    6: "32px",
  },
  radius: {
    sm: "8px",
    md: "12px",
    lg: "16px",
  },
  shadow: {
    card: "0 10px 30px rgba(0, 0, 0, 0.25)",
  },
} as const;

export type AppTheme = typeof theme;
