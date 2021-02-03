import React, { Component } from 'react';
import ActorCard from '../ActorCard/ActorCard';
// import { withRouter } from 'react-router';

import ApiMovieDb from '../../Services/ApiMovieDb';

class Cast extends Component {
  state = { casts: [] };
  componentDidMount() {
    ApiMovieDb.getCast(this.props.movieId).then(actors =>
      this.setState({ casts: actors.cast }),
    );
  }
  render() {
    return (
      <>
        {this.state.casts.map(actor => {
          return (
            <ActorCard
              key={actor.id}
              path={actor.profile_path}
              name={actor.name}
              department={actor.known_for_department}
            />
          );
        })}
      </>
    );
  }
}
export default Cast;
