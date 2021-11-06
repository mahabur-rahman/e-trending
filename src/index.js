import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { ProductProvider } from "./context";

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
      <Router>
        <App />
      </Router>
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
