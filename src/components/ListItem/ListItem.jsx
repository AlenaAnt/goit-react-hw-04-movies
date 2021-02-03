import React from 'react';
import routes from '../../routes';
import { NavLink } from 'react-router-dom';
import style from './ListItem.module.css';
import imgCard from '../../icon/images.jpg';

const ListItem = ({ dataFilm }) => {
  const path = () => {
    if (dataFilm.poster_path === null) {
      return imgCard;
    }
    return 'https://image.tmdb.org/t/p/w342' + dataFilm.poster_path;
  };
  return (
    <>
      <li className={style.link}>
        <NavLink to={routes.movies + '/' + dataFilm.id}>
          {dataFilm.title}
          <img src={path()} alt={dataFilm.title} />
        </NavLink>
      </li>
    </>
  );
};

export default ListItem;
