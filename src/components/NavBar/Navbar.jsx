import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
const Navbar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to={routes.home}>Home</NavLink>
          </li>
          <li>
            <NavLink to={routes.movies}>Movies</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
