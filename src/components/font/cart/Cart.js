import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css";
const Cart = ({
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
  handleCartClearance,
}) => {
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  return (
    <div>
      <div className="cart-items">
        {/* <div className="cart-item-total-price-name">
        Total price <div className="cart-items-total-price">${totalPrice}</div>
      </div> */}

        <div className="cart-items-empty">
          {cartItems.length === 0 && (
            <div className="cart-items-empty">
              <h2>Checkout</h2>
              <p>Thank you for your order</p>
            </div>
          )}
          <div className="items">
            <h3>Order Summery</h3>
            <div className="item1">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-items-list">
                  <div className="mycart-items">
                    {/* <img
                className="cart-items-image"
                src={item.image}
                alt={item.name}
                width={300}
              /> */}

                    <div className="mycontainer">
                      <div className="cart-items-name">{item.name}:</div>
                      {/* <div className="cart-items-function">
                  <button
                    style={{ background: "blue" }}
                    className="cart-items-add"
                    onClick={() => handleAddProduct(item)}
                  >
                    +
                  </button>
                  <button
                    style={{ background: "#FF0090" }}
                    className="cart-items-remove"
                    onClick={() => handleRemoveProduct(item)}
                  >
                    -
                  </button>
                </div> */}
                      <div className="cart-items-price">{item.quantity}</div>

                      <div className="cart-items-function">
                        <button
                          style={{ background: "blue",color:"white",width:"50px",fontSize:"20px",borderRadius:"5px" }}
                          className="cart-items-add"
                          onClick={() => handleAddProduct(item)}
                        >
                          +
                        </button>
                        <button
                          style={{ background: "#FF0090",fontSize:"20px",color:"white",width:"50px",borderRadius:"5px" }}
                          className="cart-items-remove"
                          onClick={() => handleRemoveProduct(item)}
                        >
                          -
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
           



 <div className="cart-item-total-price-name">
        Total (INR): {totalPrice}</div> 
        
        
        
  <div className="bottom-btn">
{/* <div className="clear-cart">
        {cartItems.length >= 1 && (
          <button
            className="clear-cart-btn"
            onClick={handleCartClearance}
            style={{ background: "blue", width: 190,borderRadius:"5px",color:"white",fontSize:"12px" }}
          >
            CANCEL
          </button>
        )}
      </div> */}
      <Link className="save-checkout" to="/checkout">SAVE AND CHECKOUT</Link>
{/* <button style={{ width:"80px",color:"blue",marginBottom:"0px",borderColor:"white" }}>CANCEL</button> */}

<div className="clear-cart">
        {cartItems.length >= 1 && (
          <button
            className="clear-cart-btn"
            onClick={handleCartClearance}
            style={{  width: '100px',height:"30px",color:"blue",fontSize:"18px",borderColor:"white",padding:"5px" }}
          >
            CANCEL
          </button>
        )}
      </div>


         
        </div>
      </div></div></div>


        

      </div>
{/* 
  <div className="bottom-btn">
<div className="clear-cart">
        {cartItems.length >= 1 && (
          <button
            className="clear-cart-btn"
            onClick={handleCartClearance}
            style={{ background: "blue", width: 190,borderRadius:"5px",color:"white",fontSize:"12px" }}
          >
            SAVE AND CHECKOUT
          </button>
        )}
      </div>
<button style={{ width:"60px",color:"blue" }}>CANCEL</button>
         
        </div>
      </div></div> */}

      {/* 
 <div className="cart-item-total-price-name">
        Total price <div className="cart-items-total-price">${totalPrice}</div>
      </div> */}

      {/* <div className="clear-cart">
        {cartItems.length >= 1 && (
          <button
            className="clear-cart-btn"
            onClick={handleCartClearance}
            style={{ background: "red", width: 190 }}
          >
            SAVE AND CHECKOUT
          </button>
        )}
      </div> */}
    </div>
  );
};

export default Cart;
