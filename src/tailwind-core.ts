export const tailwindCore = {
  theme: {
    fontFamily: {
      serif: [
        "'Lora Variable'",
        "'Lora'",
        "ui-serif",
        "Georgia",
        "Cambria",
        "'Times New Roman'",
        "Times",
        "serif",
      ],
      mono: [
        "'JetBrains Mono Variable'",
        "'JetBrains Mono'",
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        "'Liberation Mono'",
        "'Courier New'",
        "monospace",
      ],
    },
    fontSize: {
      sub: "0.75rem",
      mono: "0.875rem",
      body: "0.9375rem",
      h4: "1.1875rem",
      h3: "1.5625rem",
      h2: "2rem",
      h1: "3.125rem",
    },
    colors: {
      white: "#fff",
      black: "#000",
      light: {
        "bg-1": "rgba(204, 204, 204, 1)",
        "fg-1": "rgba(212, 212, 212, 1)",
        "fg-2": "rgba(221, 221, 221, 1)",
        "fg-disabled": "rgba(212, 212, 212, 0.5)",
        stroke: "rgba(0, 0, 0, 1)",
        "stroke-disabled": "rgba(0, 0, 0, 0.25)",
        "stroke-active": "rgba(0, 80, 124, 1)", // Accent
        accent: "rgba(0, 80, 124, 1)", // Soon we'll add support for a dynamic theme accent switcher
        text: "rgba(0, 0, 0, 1)",
        "text-subtle": "rgba(0, 0, 0, 0.33)",
        red: "rgba(244, 82, 82, 1)",
        yellow: "rgba(252, 208, 95, 1)",
        green: "rgba(78, 217, 125, 1)",
        blue: "rgba(0, 163, 255, 1)",
        purple: "rgba(172, 133, 241, 1)",
        gray: "rgba(238, 238, 238, 1)",
      },
      dark: {
        "bg-1": "rgba(27, 27, 27, 1)",
        "fg-1": "rgba(33, 33, 33, 1)",
        "fg-2": "rgba(38, 38, 38, 1)",
        "fg-disabled": "rgba(33, 33, 33, 0.5)",
        stroke: "rgba(255, 255, 255, 0.1)",
        "stroke-disabled": "rgba(255, 255, 255, 0.04)",
        "stroke-active": "rgba(0, 163, 255, 1)", // Accent
        accent: "rgba(0, 163, 255, 1)", // Soon we'll add support for a dynamic theme accent switcher
        text: "rgba(222, 222, 222, 1)",
        "text-subtle": "rgba(222, 222, 222, 0.3)",
        red: "rgba(128, 37, 37, 1)",
        yellow: "rgba(141, 120, 32, 1)",
        green: "rgba(38, 130, 69, 1)",
        blue: "rgba(0, 80, 124, 1)",
        purple: "rgba(73, 48, 165, 1)",
        gray: "rgba(95, 95, 95, 1)",
      },
    },
    boxShadow: {
      "light-coloured-component":
        "0px -9px 12.2px 0px rgba(255, 255, 255, 0.10) inset, 0px 3px 4.7px 0px rgba(255, 255, 255, 0.10) inset, 0px 0px 3.7px 1px rgba(255, 255, 255, 0.10) inset, 0px 2px 7.8px 0px rgba(0, 0, 0, 0.20)",
      "light-material-component":
        "0px -6px 8.6px 2px rgba(0, 0, 0, 0.10) inset, 0px 1px 6.3px 0px rgba(0, 0, 0, 0.25) inset, 0px 2px 9.4px 0px rgba(0, 0, 0, 0.10)",
      "dark-coloured-component":
        "0px -9px 12.2px 0px rgba(0, 0, 0, 0.20) inset, 0px 3px 4.7px 0px rgba(0, 0, 0, 0.20) inset, 0px 0px 3.7px 1px rgba(0, 0, 0, 0.20) inset, 0px 2px 7.8px 0px rgba(0, 0, 0, 0.20);",
      "dark-material-component":
        "0px -6px 8.6px 2px rgba(0, 0, 0, 0.10) inset, 0px 1px 6.3px 0px rgba(0, 0, 0, 0.25) inset, 0px 2px 9.4px 0px rgba(0, 0, 0, 0.10)",
    },
    borderRadius: {
      4: "4px",
      8: "8px",
      12: "12px",
      16: "16px",
      24: "24px",
      32: "32px",
      full: "9999px",
    },
    spacing: {
      256: "256px",
      200: "200px",
      128: "128px",
      110: "110px",
      96: "96px",
      86: "86px",
      72: "72px",
      64: "64px",
      56: "56px",
      48: "48px",
      36: "36px",
      32: "32px",
      30: "30px",
      28: "28px",
      24: "24px",
      20: "20px",
      18: "18px",
      16: "16px",
      12: "12px",
      10: "10px",
      8: "8px",
      6: "6px",
      4: "4px",
      0: "0px",
    },
    transitionDuration: {
      "150": "150ms",
    },
    transitionTimingFunction: {
      out: "cubic-bezier(0, 0, 0.2, 1);",
    },
    extend: {
      keyframes: {
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.95)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        "scale-out": {
          from: { opacity: "1", transform: "scale(1)" },
          to: { opacity: "0", transform: "scale(0.95)" },
        },
      },
      animation: {
        "scale-in": "scale-in 150ms ease-out",
        "scale-out": "scale-out 150ms ease-out",
      },
    },
  },
};
