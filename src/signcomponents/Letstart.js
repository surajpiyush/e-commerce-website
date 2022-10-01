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
    <div className="gotomenu-container">
    <h1 className='welcome'>Welcome to Food's Kitchen</h1>
<h1 className='mybtn'>
  
     
  <Link className='txt-link' to="/app">GO TO MENU</Link></h1>
    </div></div>
  )
}

export default Details;
















