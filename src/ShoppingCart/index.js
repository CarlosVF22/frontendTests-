import React from "react";
import './shoppingCart.css';

function ShoppingCart(props) {
    return(
        <div>
            <picture>
                <img src={props.logo} alt='Logo shopping cart'/>
            </picture>
            <span>{props.text}</span>
        </div>
    );
}

export {ShoppingCart}