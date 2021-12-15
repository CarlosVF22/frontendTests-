import React from "react";
import './SearchBar.css';

function SearchBar(){
    return (
        <form className='searchBar'>
            <input type='text' placeholder="Buscar"/>
        </form>
    );
}

export {SearchBar}