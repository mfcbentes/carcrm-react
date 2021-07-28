import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.css";
import Routes from "./Routes";
import { Loading, Notify, Alert, Confirm } from "./view/components";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
  },
  props: {
    MuiTextField: {
      variant: "outlined",
      fullWidth: true,
      size: "small",
    },
    MuiSelect: {
      variant: "outlined",
      fullWidth: true,
    },
  },
});

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Confirm
        open={true}
        onClose={() => alert("close")}
        onConfirm={() => alert("confirm")}
      />
      <Alert />
      <Notify />
      <Loading />
      <Routes />
    </ThemeProvider>
  </Provider>
);

export default App;
