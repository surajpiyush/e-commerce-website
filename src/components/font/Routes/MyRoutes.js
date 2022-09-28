import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "../product/Products";
import Cart from "../cart/Cart";
import Signup from "../../../register/Signup";

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
        <Route path="/sign" element={<Signup />}></Route>

        <Route
          path="/main"
          exact
          element={
            <>
              <Products
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
