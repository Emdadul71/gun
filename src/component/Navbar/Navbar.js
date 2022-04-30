import React from 'react';
import './Navbar.css';
import { BsCart } from "react-icons/bs";

const Navbar = ({cart, openModal}) => {
    return (
        <div className='navbar'>
            <h1>Kopa Shamsu Store <small>By Md. Ali</small></h1>
            <div className='cart-counter' onClick={openModal}>
                <span>{cart.length}</span>
                <BsCart className='icon' color="black"></BsCart>
            </div>
        </div>
    );
};

export default Navbar;