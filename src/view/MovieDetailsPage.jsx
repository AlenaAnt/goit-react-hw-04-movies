import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import { NavLink } from 'react-router-dom';
import routes from '../routes';
import FilmCard from '../components/FilmCard';

class MovieDetailsPage extends Component {
  state = {};
  render() {
    return (
      <>
        <h1>MovieDetailsPage</h1>
        <NavBar />
        <NavLink to={routes.home}>Go back</NavLink>
        <FilmCard />
      </>
    );
  }
}

export default MovieDetailsPage;
