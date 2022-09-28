import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { MdRestaurant } from "react-icons/md";
import { BsCartFill } from "react-icons/bs";
const Header = ({ cartItems }) => {
  return (
    <header className="container">
      {" "}
      <div className="subcontainer">
        <div className="header-link">
          <h1>
            <MdRestaurant />
          </h1>
        </div>

        <h1 className="txt">Food Restaurant</h1>
       <h1 className="txt-sign">
          <Link to="/sign"  className="mysign" >Signup</Link>
       </h1>
        <div className="cart">
          <h1>
            <Link to="/cart">
              <BsCartFill style={{ color: "black" }} />
            </Link>
            {cartItems.length === 0 ? "" : cartItems.length}
          </h1>
        </div>
      </div>

      <div className="gotomenu">
        <Link to="/main" >
          gotomenu
        </Link>
      </div>
    </header>
  );
};

export default Header;
