export const myTheme = {
  // Breakpoints
  breakpoints: ["320px", "416px", "768px"],

  // Colors
  colors: {
    text: "#fff",
    textSecondary: "#18181b",

    background: "#18181b",
    primary: "#FE7A72",

    borderColor: "#3f3f46",

    secondary: "#FE7A72",
    muted: "#1f2937",
    primaryGradient:
      "linear-gradient(307deg, rgba(254, 65, 114, 1) 0%, rgba(254, 178, 114, 1) 100%)",
    backgroundChat: "#27272a",
    // modes: {
    //   light: {
    //     text: "#fff",
    //     background: "#18181b",
    //     primary: "#5EEAD4",
    //     secondary: "#bb243a",
    //     muted: "#1f2937",
    //     highlight:
    //       "linear-gradient(307deg, rgba(6, 182, 212, 1) 0%, rgba(94, 234, 212, 1) 100%)",
    //     backgroundChat: "#27272a",
    //   },
    // },
  },

  // Fonts
  fonts: {
    body: "Open sans, ui-sans-serif, system-ui",
    heading: "inherit",
  },

  // Font sizes
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],

  fontWeights: {
    body: 400,
    heading: 700,

    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  // Line heights
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },

  // Letter spacings
  letterSpacings: {
    body: "normal",
    caps: "0.2em",
  },

  // Space
  // sx={{ p: 3 }}
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],

  // Widths
  // sx={{ maxWidth: 'container' }}
  sizes: {
    container: 1100,
  },

  // Borders
  // <Box p={3} border={1} borderColor="primary">
  borders: [0, "1px solid", "2px solid"],

  // BorderRadius
  // sx={{ borderRadius: 'light' }}
  radii: {
    light: "7px",
    regular: "14px",
    bold: "21px",
    full: "1000px",
  },

  // Shadows
  // sx={{ boxShadow: "small" }}
  shadows: {
    small: "0 0 4px rgba(0, 0, 0, .125)",
    large: "0 0 24px rgba(0, 0, 0, .125)",
  },

  // Z-index
  zIndices: [0, 1, 2, 3, 4, 5],

  animation: {
    typing: "blink 1s steps(5, start) infinite",
  },

  styles: {
    root: {
      boxSizing: "border-box",
      padding: 0,
      margin: 0,
    },
    a: {
      color: "inherit",
      textDecoration: "none",
    },
    li: {
      listStyleType: "none",
    },
    html: {
      maxWidth: "100vw",
      overflowX: "hidden",
    },
    body: {
      color: "text",
      background: "background",
      fontFamily: "body",
    },
    mainTitle: {
      fontSize: 6,
      background: "primaryGlow",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
  },

  scrollbar: {
    width: "5px",
    track: {
      bg: "silver",
      borderRadius: "15px",
    },
    thumb: {
      bg: "primary",
      borderRadius: "7px",
    },
  },
};
