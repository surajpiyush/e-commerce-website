import React from "react";
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
    <div className="cart-items">
      <div className="cart-item-total-price-name">
        Total price <div className="cart-items-total-price">${totalPrice}</div>
      </div>

      <div className="cart-items-empty">
        {cartItems.length === 0 && (
          <div className="cart-items-empty">
            <h2>Checkout</h2>
            <p>Thank you for your order</p></div>
        )}
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-items-list">
              <img
                className="cart-items-image"
                src={item.image}
                alt={item.name}
                width={300}
              />

              <div className="mycontainer">
                <div className="cart-items-name">{item.name}</div>
                <div className="cart-items-function">
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
                  
                </div>
                <div className="cart-items-price">
                  {item.quantity} * ${item.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

                
                    <div className="clear-cart">
                      {cartItems.length >= 1 && (
                        <button
                          className="clear-cart-btn"
                          onClick={handleCartClearance}
                        style={{background:"red" ,width:190}}>
                          Clear Cart
                        </button>
                      )}
                    </div>
                  
    </div>
    
  );
};

export default Cart;
