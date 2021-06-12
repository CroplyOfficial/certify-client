import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { createStore } from "redux";
import { Provider } from "react-redux"; // For accessing the store globally
import allReducers from "./reducers";

import { CustomThemeProvider } from "./contexts/themeContext";

interface IReduxWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION__: () => unknown;
}
type ReduxWindow = IReduxWindow & typeof globalThis;

const store = createStore(
  allReducers,
  (window as ReduxWindow).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as ReduxWindow).__REDUX_DEVTOOLS_EXTENSION__()
);

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
