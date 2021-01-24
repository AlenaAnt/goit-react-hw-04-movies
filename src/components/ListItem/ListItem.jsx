import React from 'react';
import routes from '../../routes';
import { NavLink } from 'react-router-dom';

const ListItem = ({ dataFilm }) => {
  return (
    <>
      <li>
        <NavLink to={routes.movies + '/' + dataFilm.id}>
          {dataFilm.title}
          <img
            src={'https://image.tmdb.org/t/p/w92' + dataFilm.poster_path}
            alt={dataFilm.title}
          />
        </NavLink>
      </li>
    </>
  );
};

export default ListItem;
