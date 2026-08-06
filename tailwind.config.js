/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        "primary-fixed-dim": "#9bccf7",
        "surface-container-highest": "#dfe3e4",
        "on-error-container": "#93000a",
        "surface-container-high": "#e5e9ea",
        "on-tertiary-container": "#80dde8",
        "on-tertiary-fixed": "#001f23",
        "error": "#ba1a1a",
        "secondary-fixed-dim": "#bdc2ff",
        "primary-container": "#275c82",
        "on-secondary": "#ffffff",
        "surface-variant": "#dfe3e4",
        "on-error": "#ffffff",
        "surface-bright": "#f6fafb",
        "background": "#f6fafb",
        "on-secondary-fixed-variant": "#3b417d",
        "error-container": "#ffdad6",
        "outline-variant": "#c1c7cf",
        "on-secondary-fixed": "#0d1350",
        "inverse-on-surface": "#edf1f2",
        "surface-container": "#eaeef0",
        "on-tertiary": "#ffffff",
        "on-surface-variant": "#41474e",
        "inverse-primary": "#9bccf7",
        "tertiary-fixed": "#94f1fc",
        "surface-container-low": "#f0f4f5",
        "tertiary-container": "#00626a",
        "inverse-surface": "#2c3132",
        "secondary-container": "#b3b9fe",
        "secondary": "#535997",
        "surface-container-lowest": "#ffffff",
        "on-surface": "#181c1d",
        "tertiary": "#00484f",
        "on-primary": "#ffffff",
        "surface-tint": "#2f6389",
        "outline": "#72787f",
        "primary-fixed": "#cce5ff",
        "on-secondary-container": "#414884",
        "on-background": "#181c1d",
        "primary": "#014469",
        "surface": "#f6fafb",
        "surface-dim": "#d6dbdc",
        "on-primary-fixed-variant": "#0e4b70",
        "on-primary-container": "#a3d4ff",
        "tertiary-fixed-dim": "#77d5df",
        "secondary-fixed": "#e0e0ff",
        "on-tertiary-fixed-variant": "#004f55",
        "on-primary-fixed": "#001e31"
      },
      fontFamily: {
        "headline": ["Inter"],
        "body": ["Inter"],
        "label": ["Inter"]
      },
      borderRadius: { DEFAULT: "0.125rem", lg: "0.25rem", xl: "0.5rem", full: "0.75rem" }
    }
  }
}
