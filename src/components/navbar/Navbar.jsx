import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="nav-bar">
        <div className="nav-brand">
            <a href="http://">
                <h1>Porto<span>folio</span></h1>
            </a>
        </div>
        <div className="nav-item">
            <ul className="nav-item">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">Services</a>
                </li>
                <li>
                    <a href="/">About</a>
                </li>
                <li>
                    <a href="/">Contact</a>
                </li>
            </ul>
        </div>
    </div>
  );
}

export default Navbar;