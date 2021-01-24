import React, { Component } from 'react';

import NavBar from '../components/NavBar';
import Form from '../components/Form';
import ApiMovieDb from '../Services/ApiMovieDb';
import List from '../components/List';
import ListItem from '../components/ListItem';

class Movies extends Component {
  state = { query: '', dataFilms: [] };
  formHandler = queryString => {
    this.setState({ query: queryString });
    ApiMovieDb.getSearchMovies(queryString).then(moviesList =>
      this.setState({ dataFilms: moviesList }),
    );
  };
  render() {
    return (
      <>
        <NavBar />
        <h1>Movies</h1>
        <Form formHandler={this.formHandler} />
        <List>
          {this.state.dataFilms.map(dataFilm => {
            return <ListItem key={dataFilm.id} dataFilm={dataFilm} />;
          })}
        </List>
      </>
    );
  }
}

export default Movies;
