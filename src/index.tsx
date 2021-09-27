import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Provider } from "react-redux"; // For accessing the store globally
import { CustomThemeProvider } from "./contexts/themeContext";

import store from './store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CustomThemeProvider>
        <App />
      </CustomThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
