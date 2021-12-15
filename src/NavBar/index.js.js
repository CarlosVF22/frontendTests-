import React from 'react';
import './NavBar.css';

function NavBar(props){
    const items = props.items;
    const listItems = items.map((item) => <li>{item}</li>)
    return(
        <ul className='navBar'>{listItems}</ul>
    );
}

export {NavBar};