import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { store } from './redux/store'
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux'
import React from "react";
import App from "./App";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@components/GlobalStyle/main.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
