import React from "react";
import Header from "../header/Header";
import "./Products.css";
const Products = ({ productItems,handleAddProduct ,handleMyProduct,cartItems}) => {
  return (

    <div><Header cartItems={cartItems} />
    <div className="products">


      {productItems.map((productItem) => (
        <div className="card"  >
          <div className="img-container" key={productItem.id}>
            <img
              className="product-image"
              src={productItem.image}
              alt={productItem.name}
              width={300}
              height={200} 
            />
            <h3 className="product-name">{productItem.name}</h3>
            <h4>Price:{productItem.price}</h4>
            <div className="btn-container">
              <button
                style={{ background: "blue" }}
                onClick={()=>handleAddProduct(productItem)}
              >
                +
              </button>
              <button onClick={()=>handleMyProduct} style={{ background: "#DE3163" }}>-</button>
            </div>
          </div>
        </div>
      ))}
    </div></div>
  );
};

export default Products;
