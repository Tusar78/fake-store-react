import React from 'react';
import "./Header.css"

const Header = () => {
  return (
    <header className='header'>
      <nav className="nav container">
        <h1 className="nav__logo">Fake Store</h1>

        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className='nav__link'>Home</a>
            </li>
            <li className="nav__item">
              <a href="#about" className='nav__link'>About</a>
            </li>
            <li className="nav__item">
              <a href="#contact" className='nav__link'>Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;