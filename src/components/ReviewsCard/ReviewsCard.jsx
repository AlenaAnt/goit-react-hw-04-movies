import React from 'react';
import style from './ReviewsCard.module.css';

const RewiewsCard = ({ author, content }) => {
  return (
    <>
      <p className={style.author}>{author}</p>
      <p className={style.content}>{content}</p>
    </>
  );
};

export default RewiewsCard;
