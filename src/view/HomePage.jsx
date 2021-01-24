import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import ApiMovieDb from '../Services/ApiMovieDb';
import List from '../components/List';
import ListItem from '../components/ListItem/ListItem';

class HomePage extends Component {
  state = {
    dataFilms: [],
  };
  componentDidMount() {
    ApiMovieDb.getPopulation().then(data => this.setState({ dataFilms: data }));
  }
  render() {
    return (
      <>
        <NavBar />
        <h1>HomePage</h1>
        <List>
          {this.state.dataFilms.map(dataFilm => {
            return <ListItem key={dataFilm.id} dataFilm={dataFilm} />;
          })}
        </List>
      </>
    );
  }
}

export default HomePage;
