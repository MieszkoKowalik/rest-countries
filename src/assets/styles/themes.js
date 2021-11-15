export const theme = {
  colors: {
    primary: "hsl(200, 15%, 8%)",
    neutralDark: "hsl(0, 0%, 52%)",
    neutral: "hsl(0, 0%, 98%)",
    secondary: "hsl(0, 0%, 100%)",
  },
  media: {
    medium: "(min-width: 1024px)",
    large: "(min-width: 1200px)",
  },
};
export const darkTheme = {
  ...theme,
  colors: {
    primary: "hsl(0, 0%, 100%)",
    neutralDark: "hsl(0, 0%, 100%)",
    neutral: "hsl(207, 26%, 17%)",
    secondary: "hsl(209, 23%, 22%)",
  },
};
