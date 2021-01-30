import React, { Component } from 'react';
// import { withRouter } from 'react-router';

import ApiMovieDb from '../../Services/ApiMovieDb';

class Cast extends Component {
  state = {};
  render() {
    console.log(ApiMovieDb.getCast(this.props.movieId));
    ApiMovieDb.getCast(this.props.movieId).then(cast => console.log(cast));
    return (
      <>
        <h1>Cast</h1>;
      </>
    );
  }
}
export default Cast;
