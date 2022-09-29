import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { MdRestaurant } from "react-icons/md";
import { BsCartFill } from "react-icons/bs";
const Header = ({ cartItems }) => {
  return (
    <header className="container">
      
      <div className="subcontainer">
        
          <div className="myicon">
            <MdRestaurant />
         
        </div>

        <div className="txt"> Food Restaurant</div>
       <div className="txt-signup">
          <Link to="/sign"  className="mysign" >Signup</Link>
       </div>
        <div className="cart">
          <div className="mycount">
           <div> <Link to="/cart">
              <BsCartFill style={{ color: "black" }} />
            </Link></div>
            <div>
            {cartItems.length === 0 ? "" : cartItems.length}</div>
          </div>
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
