import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { createTheme, responsiveFontSizes } from "@mui/material";
import { ThemeProvider } from "@mui/styles";

let theme = createTheme();
theme = responsiveFontSizes(theme);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
