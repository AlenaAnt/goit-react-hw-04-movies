import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import routes from '../routes';
import { NavLink, Route, Switch } from 'react-router-dom';
import FilmCard from '../components/FilmCard';
import Cast from '../components/Cast/Cast';
import Reviews from '../components/Reviews/Reviews';
import style from './MovieDetailsPage.module.css';

class MovieDetailsPage extends Component {
  state = {};

  render() {
    return (
      <div className={style.wrapper}>
        {/* <h1>MovieDetailsPage</h1> */}
        <NavBar />
        <button className={style.go_back} onClick={this.props.history.goBack}>
          Go back
        </button>
        <FilmCard testt="test" />
        <div className={style.nav_bottom}>
          <NavLink to={`${this.props.match.url}/cast`}>Cast</NavLink>

          <NavLink to={`${this.props.match.url}/reviews`}>Reviews</NavLink>
        </div>
        <Route
          path={routes.cast}
          render={props => {
            console.log(props);
            return (
              <div className={style.wrapper_actor}>
                <Cast {...props} movieId={this.props.match.params.movieId} />
              </div>
            );
          }}
        />
        <Route path={routes.reviews} component={Reviews} />
        {/* <Cast movieId={this.props.match.params.movieId} /> */}
        {/* <Reviews movieId={this.props.match.params.movieId} /> */}
      </div>
    );
  }
}
export default MovieDetailsPage;
