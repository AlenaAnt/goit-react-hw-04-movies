import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import routes from '../routes';
import { NavLink, Route, Switch } from 'react-router-dom';
import FilmCard from '../components/FilmCard';
import Cast from '../components/Cast/Cast';
import Reviews from '../components/Reviews/Reviews';

class MovieDetailsPage extends Component {
  state = {};

  render() {
    return (
      <>
        <h1>MovieDetailsPage</h1>
        <NavBar />
        {/* <NavLink to={routes.home}>Go back</NavLink> */}
        <button onClick={this.props.history.goBack}>Go back</button>
        <FilmCard testt="test" />
        <NavLink to={`${this.props.match.url}/cast`}>Cast</NavLink>
        <br />
        <NavLink to={`${this.props.match.url}/reviews`}>Reviews</NavLink>
        <Cast movieId={this.props.match.params.movieId} />
        <Reviews />
      </>
    );
  }
}
export default MovieDetailsPage;
