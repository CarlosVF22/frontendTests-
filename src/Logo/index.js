import React from "react";
import './logo.css';

function Logo(props){
    return(
            <picture className="logo">
                <img src={props.logo}/>
            </picture>
    );
}

export {Logo}