import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import thunkMiddleware from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // Habilitar la extensión Redux DevTools en el navegador

// Crear la tienda (store) de Redux
const store = createStore(
  reducer, // Reducer que define cómo se actualiza el estado
  composeEnhancer(applyMiddleware(thunkMiddleware)) // Aplicar middlewares, en este caso, redux-thunk para admitir acciones asíncronas
);

export default store;
