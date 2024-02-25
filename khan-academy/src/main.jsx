// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/provider";
import store from "./Redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
  <Provider store={store}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
  </Provider>
    </BrowserRouter>
);
