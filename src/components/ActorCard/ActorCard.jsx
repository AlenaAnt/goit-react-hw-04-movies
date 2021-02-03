import React from 'react';
import style from './ActorCard.module.css';
import imgCard from '../../icon/img.jpg';

const ActorCard = ({ path, name, department }) => {
  const pathImg = () => {
    if (path === null) {
      return imgCard;
    }
    return 'https://image.tmdb.org/t/p/w342' + path;
  };
  return (
    <div className={style.actor_card}>
      <img src={pathImg()} alt={name} />
      <p className={style.name}>{name}</p>
      <p>{department}</p>
    </div>
  );
};

export default ActorCard;
