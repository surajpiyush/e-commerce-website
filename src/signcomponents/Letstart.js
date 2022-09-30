import React from 'react'
import { MdRestaurant } from "react-icons/md";
import { Link } from 'react-router-dom';
import './Letstart.css';
const Details = () => {
  return (
    <div className='letstart-container'>
    <div className='head-container'>
     <div className="logo"><MdRestaurant/></div>
     <div className="head-txt">Food Restaurant</div>
    </div>
<h1 className='mybtn'><Link className='txt-link' to="/app">go-to-menu</Link></h1>
    </div>
  )
}

export default Details;
















