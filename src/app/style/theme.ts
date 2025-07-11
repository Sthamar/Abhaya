import { MantineThemeOverride } from "@mantine/core";

export const theme: MantineThemeOverride = {
  fontFamily: "Inter, sans-serif",
  fontFamilyMonospace: "Fira Code, monospace",
  headings: {
    fontFamily: "Poppins, sans-serif",
    sizes: {
      h1: { fontSize: "36px", lineHeight: "1.4" },
      h2: { fontSize: "28px" },
      h3: { fontSize: "22px" },
    },
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
  },
  colors: {
    brand: [
      "#EFF6FF", // Light blue tint (not directly used, fallback)
      "#DBEAFE",
      "#BFDBFE",
      "#93C5FD",
      "#60A5FA",
      "#3B82F6", // Primary
      "#2563EB", // Primary hover
      "#1D4ED8",
      "#1E40AF",
      "#1E3A8A",
    ],
  },
  primaryColor: "brand",

  other: {
    background: "#F8FAFC", // Soft Mist
    foreground: "#1E293B", // Night Blue (also Text Primary)

    text: {
      primary: "#1E293B", // Gunmetal
      secondary: "#64748B", // Cool Gray
      muted: "#CBD5E1", // Fog Blue
      inverted: "#F8FAFC", // Soft Mist
    },

    border: {
      light: "#E2E8F0", // Pale Steel
      default: "#CBD5E1", // Fog Blue
      strong: "#64748B", // Cool Gray
    },

    navbar: {
      background: "#1E293B", // Night Blue
      text: "#F8FAFC", // Soft Mist
      hoverBackground: "#334155", // Slightly lighter than navbar (Tailwind slate-700)
      activeBackground: "#475569", // Active nav item (Tailwind slate-600)
      border: "#CBD5E1", // Border
      icon: "#93C5FD", // Light brand
      mutedText: "#64748B", // Less emphasized
    },

    button: {
      default: {
        bg: "#3B82F6", // Deep Sky Blue
        hover: "#2563EB", // Cobalt Blue
        text: "#F8FAFC", // Soft Mist
      },
      secondary: {
        bg: "#F1F5F9", // Ice Gray
        hover: "#E2E8F0", // Pale Steel
        text: "#1E293B", // Gunmetal
      },
      disabled: {
        bg: "#CBD5E1", // Fog Blue
        text: "#94A3B8", // Muted text (Tailwind slate-400)
      },
    },

    success: {
      bg: "#DCFCE7", // Tailwind green-100
      text: "#15803D", // Tailwind green-800
      border: "#22C55E", // Soft Green
    },

    error: {
      bg: "#FEE2E2", // Tailwind red-100
      text: "#B91C1C", // Tailwind red-700
      border: "#EF4444", // Soft Red
    },

    warning: {
      bg: "#FEF9C3", // Tailwind yellow-100
      text: "#92400E", // Tailwind yellow-800
      border: "#F59E0B", // Soft Amber
    },

    info: {
      bg: "#DBEAFE", // Tailwind blue-100
      text: "#1D4ED8", // Tailwind blue-700
      border: "#60A5FA", // Tailwind blue-400
    },
  },
};
