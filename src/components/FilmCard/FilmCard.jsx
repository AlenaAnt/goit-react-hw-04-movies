import React, { Component } from 'react';
import ApiMovieDb from '../../Services/ApiMovieDb';
import { withRouter } from 'react-router';
import style from './FilmCard.module.css';

class FilmCard extends Component {
  state = { filmDet: {} };
  componentDidMount() {
    const { match } = this.props;
    ApiMovieDb.getFilmDetails(match.params.movieId).then(data => {
      this.setState({ filmDet: data });
    });
  }

  render() {
    const {
      title,
      vote_average,
      overview,
      poster_path,
      genres = [],
    } = this.state.filmDet;
    const getGenres = () => {
      return genres.map(gener => gener.name).join(', ');
    };

    return (
      <>
        {/* <h3>FilmCard</h3> */}
        <div className={style.card}>
          <div className={style.img}>
            <img
              src={'https://image.tmdb.org/t/p/w500' + poster_path}
              alt={title}
            />
          </div>
          <div className={style.description}>
            <h1>{title}</h1>
            <p>User score:{vote_average}</p>
            <h2>Owerview</h2>
            <p>{overview}</p>
            <h3>Genres</h3>
            <p>{getGenres()}</p>
          </div>
        </div>
      </>
    );
  }
}

// const FilmCard = props => {
//   const { match } = props;
//   console.log(
//     ApiMovieDb.getFilmDetails(match.params.movieId).then(data =>
//       console.log(data.title),
//     ),
//   );

//   return (

// };

export default withRouter(FilmCard);
