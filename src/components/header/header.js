/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './header.sass';

const Header = () => {
    return (
        <div className="header__block">
            <h3 className="header__title">
                <a href="#">
                Game of Thrones DB
                </a>
            </h3>
            <ul className="header__links">
                <li>
                    <a href="#">Characters</a>
                </li>
                <li>
                    <a href="#">Houses</a>
                </li>
                <li>
                    <a href="#">Books</a>   
                </li>
            </ul>
        </div>
    );
};

export default Header;