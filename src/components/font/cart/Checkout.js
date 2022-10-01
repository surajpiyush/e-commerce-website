import React from 'react'
import './Checkout.css';
import { MdRestaurant } from "react-icons/md";
const Checkout = () => {
  return (

    <div>

<div className='mychead'>
     <div className="myclogo"><MdRestaurant/></div>
     <div className="mychead-txt">Food Restaurant</div>
    </div>


    <div className='mycheckout'>
      <h1 className='myc'>Checkout</h1>
      <div className='myc-txt'>Thank you for your order</div>
    </div></div>
  )
}

export default Checkout
