import React from 'react';
import './Card.css'
import { BsCart } from "react-icons/bs";

const Card = ({gun , handleAddToCart}) => {
    const {id, name, img, bullet, capacity, action, price} = gun;
    return (
        <div className='card'>
            <div className='image-container'>
                <img src={img} alt="" />
            </div>
            <div className='gun-info'>
                <h1>{name}</h1>
                <p>Capacity: {capacity}</p>
                <p>Action: {action}</p>
                <p>Bullet: {bullet}</p>
            </div>
            <div className='add-to-cart'>
                <button onClick={() => handleAddToCart(gun)}>
                    <BsCart className='icon'/>
                </button>
                <h4>Price: ${price}</h4>
            </div>

        </div>
    );
};

export default Card;