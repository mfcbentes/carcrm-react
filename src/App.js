import React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[900],
    },
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <h1>Hello World!</h1>
    <Button variant="contained">Default</Button>
    <Button variant="contained" color="primary">
      Primary
    </Button>
    <Button variant="contained" color="secondary">
      Secondary
    </Button>
  </ThemeProvider>
);

export default App;
