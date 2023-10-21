import React from 'react';
import './Header.css';
import { BsSearch } from "react-icons/bs";

const Header = () => {
  return (
    <div className='header'>
        <div><button className='search'><BsSearch/>Search box...</button></div>
        <div><img src="https://www.indiaretailing.com/wp-content/uploads/2023/01/indiaretail-logo-23.png" alt="" /></div>
        <div><button className='subscribe'>subscribe</button> <button className='sign'>Sign in</button></div>
    </div>
  )
}

export default Header