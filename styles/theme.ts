import { theme, DefaultTheme } from '@chakra-ui/core'

const breakpoints = ["360px", "768px", "1080px", "1550px"];
// breakpoints.sm = breakpoints[0];
// breakpoints.md = breakpoints[1];
// breakpoints.lg = breakpoints[2];
// breakpoints.xl = breakpoints[3];

const customTheme: DefaultTheme = {
  ...theme,
  fonts: {
    body: "Poppins, sans-serif",
    heading: "Poppins, sans-serif",
    mono: "Poppins, sans-serif",
  },
  fontWeights: {
    ...theme.fontWeights,
    normal: 400,
    bold: 700,
  },
  radii: {
    ...theme.radii,
    sm: '4px',
  },
  fontSizes: {
    ...theme.fontSizes,
    '3xl': '32px',
    '5xl': '40px',
    '6xl': '60px'
  },
  colors: {
    ...theme.colors,
    black: '#333',
    gray: {
      ...theme.colors.gray,
      200: '#A2A2A2'
    },
    pink: {
      ...theme.colors.pink,
      500: "#FD749B"
    },
    blue: {
      ...theme.colors.blue,
      500: "#281AC8"
    },
    purple: {
      ...theme.colors.purple,
      500: '#9a4ab0'
    }
  },
  breakpoints
}

export default customTheme