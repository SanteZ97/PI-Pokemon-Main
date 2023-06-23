import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/store";
import { Provider } from "react-redux";

// Renderizar la aplicación en el elemento con el id "root" del DOM
ReactDOM.render(
  // Utilizar el componente Provider de react-redux para proporcionar el store de Redux a la aplicación
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
