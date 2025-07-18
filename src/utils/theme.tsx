import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#007BFF",
    },
    secondary: {
      main: "#FF6F00",
      contrastText: "#fff",
    },
    teritary: {
      main: "#1284FF",
    },
    green:{
      main:"#0CAF60"
    },
    error: {
      main: "#A83027",
    },
    // background: {
    //   default: "#FFF",
    //   paper: "#fff",
    // },
    black: {
      main: "#2D2D2D",
    },
    paleBlue: {
      main: "#ffffff",
      contrastText: "#3D3D3D",
    },
  },
  components: {
    MuiListItemButton: {
      defaultProps: {
        disableTouchRipple: true,
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#F5F5F5",
          color: "#3D3D3D",
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          background: "#FFFFFF",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          background: "#F5F5F5F5",
        },
      },
    },
  },

  typography: {
    fontFamily: "Inter, sans-serif",
    h1: {
      fontWeight: 600,
      fontSize: "3rem",
      lineHeight: 1.5,
      fontFamily: "Inter, sans-serif",
    },
    h2: {
      fontWeight: 600,
      fontSize: "2.25rem",
      lineHeight: 1.5,
      fontFamily: "Inter, sans-serif",
    },
    h3: {
      fontWeight: 600,
      fontSize: "2rem",
      lineHeight: 1.5,
      fontFamily: "Inter, sans-serif",
    },
    h4: {
      fontWeight: 600,
      fontSize: "1.5rem",
      lineHeight: 1.5,
      fontFamily: "Inter, sans-serif",
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.125rem",
      lineHeight: 1.5,
      fontFamily: "Inter, sans-serif",
    },
    h6: {
      fontWeight: 600,
      fontSize: "1rem",
      lineHeight: 1.5,
      fontFamily: "Inter, sans-serif",
    },
    body1: {
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.5,
      fontFamily: "Inter, sans-serif",
    },
    body2: {
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: 1.6,
      fontFamily: "Inter, sans-serif",
    },
    subtitle1: {
      fontWeight: 500,
      fontSize: "1rem",
      lineHeight: 1.75,
      fontFamily: "Inter, sans-serif",
      letterSpacing: 0,
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: 1.75,
      fontFamily: "Inter, sans-serif",
      letterSpacing: 0,
    },
    caption: {
      fontWeight: 400,
      fontSize: "0.75rem",
      lineHeight: 1.6,
      fontFamily: "Inter, sans-serif",
      letterSpacing: 0,
    },
    overline: {
      fontWeight: 600,
      fontSize: "0.75rem",
      lineHeight: 2.46,
      fontFamily: "Inter, sans-serif",
      letterSpacing: "1px",
      textTransform: "uppercase",
    },
    button: {
      textTransform: "none",
      fontFamily: "Inter, sans-serif",
    },
  },
});
