import React from 'react';

const MovieReviews = ({ reviews }) => (
  // <div>hello</div>
  <div className="review-list">
    { reviews.map(review => <p className="review">{review.url}</p>) }
  </div>
)

export default MovieReviews;
