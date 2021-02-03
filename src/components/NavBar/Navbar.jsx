import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import style from './Navbar.module.css';
const Navbar = () => {
  return (
    <header>
      <nav>
        <ul className={style.nav}>
          <li className={style.nav_li}>
            <NavLink to={routes.home}>Home</NavLink>
          </li>
          <li className={style.nav_li}>
            <NavLink to={routes.movies}>Movies</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
