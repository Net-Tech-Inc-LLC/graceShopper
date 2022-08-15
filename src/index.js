import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import CategoriesProvider from "./components/CategoriesProvider";
import ProductsProvider from "./components/ProductsProvider";
import OrdersProvider from "./components/OrdersProvider";
import AuthProvider from "./components/AuthProvider";
// css stylesheets can be created for each component
// place them in the src/style directory, and import them like this:
import "./style/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <CategoriesProvider>
      <ProductsProvider>
        <OrdersProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </OrdersProvider>
      </ProductsProvider>
    </CategoriesProvider>
  </AuthProvider>
);

// this is a test comment
