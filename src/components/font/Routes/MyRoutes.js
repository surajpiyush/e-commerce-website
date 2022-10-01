import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "../product/Products";
import Cart from "../cart/Cart";
import Details from "../../../signcomponents/Letstart";
import Home from "../../../signcomponents/Home";
import Login from "../../../signcomponents/Login";
import Checkout from "../cart/Checkout";
const MyRoutes = ({
  productItems,
  cartItems,
  handleAddProduct,
  handleMyProduct,
  handleRemoveProduct,
  handleCartClearance,
}) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/details" element={<Details />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route
          path="/app"
          exact
          element={
            <>
              <Products
                cartItems={cartItems}
                productItems={productItems}
                handleAddProduct={handleAddProduct}
                handleMyProduct={handleMyProduct}
              />
            </>
          }
        ></Route>

        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
              handleCartClearance={handleCartClearance}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default MyRoutes;
