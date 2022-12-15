import React from 'react';
import './style.css';


function Menu() {
    return(
        <div className="nav__header">
            <div className="nav__buttons">
                <a href="/">Головна </a>
                <a href="/#about">Про нас </a>
                <a href="/">
                <p>Bread <span>Bakery </span></p></a>
                <a href="/#shop">Мазагин</a>
                <a href="/#contacts">Контакти</a></div>
            <div className="nav__bin">
                <a href="/bin"><img src="img/bin.png" alt=""/></a>
            </div>
        </div>
    )
}

export default Menu