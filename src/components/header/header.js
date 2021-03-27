/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './header.sass';
import {Link} from 'react-router-dom';

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
                    <Link to='/characters/'>Characters</Link>
                </li>
                <li>
                    <Link to='/houses/'>Houses</Link>
                </li>
                <li>
                    <Link to='/books/'>Books</Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;