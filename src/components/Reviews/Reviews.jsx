import React, { Component } from 'react';
import ApiMovieDb from '../../Services/ApiMovieDb';
import ReviewsCard from '../ReviewsCard/ReviewsCard';

class Reviews extends Component {
  state = { reviews: [] };
  componentDidMount() {
    ApiMovieDb.getReviews(this.props.match.params.movieId).then(reviews =>
      this.setState({ reviews: reviews.results }),
    );
  }

  render() {
    return (
      <>
        {this.state.reviews.length === 0 && <p> No review </p>}
        {this.state.reviews.map(review => {
          return (
            <ReviewsCard
              key={review.id}
              author={review.author}
              content={review.content}
            />
          );
        })}
      </>
    );
  }
}

export default Reviews;
