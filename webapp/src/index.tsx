import React from "react";
import ReactDOM from "react-dom";
import App from "./app/app";
import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";

import { ThemeProvider } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
import { colors } from "@material-ui/core";

const theme = createTheme({
  typography: {
    h1: {
      fontFamily: "'Gurajada', serif",
      // fontSize:
    },
    h2: {
      fontFamily: "'Montserrat', sans-serif",
    },
    h3: {
      fontFamily: "'Montserrat', sans-serif",
    },
    h4: {
      fontFamily: "'Montserrat', sans-serif",
    },
    h5: {
      fontFamily: "'Montserrat', sans-serif",
    },
    subtitle1: {
      fontFamily: "'Montserrat', sans-serif",
      color: "#ffffff",
    },
    subtitle2: {
      fontFamily: "'Gurajada', serif",
      color: "#ffffff",
    },
  },
  palette: {
    type: "dark",

    primary: {
      main: "#501515",
      dark: "#501515",
    },
    secondary: {
      main: "#501515",
      dark: "#501515",
    },
    action: {},
    background: {
      paper: "rgba(0,0,0,0.4)",
    },
    text: {
      primary: grey[400],
      secondary: grey[400],
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={responsiveFontSizes(theme)}>
      <App key="app-root" />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
