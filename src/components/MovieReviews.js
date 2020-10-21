// Code MovieReviews Here
import React from 'react';

const Review = ({headline, byline, summary_short}) => {
  return (
    <div key={headline} className="review">
      <li>
      <h2>{headline}</h2>
      <h4>Author: {byline}</h4>
      <p>Summary: {summary_short}</p>
      </li>
    </div>
  )
};

const MovieReviews = ({reviews}) => <div className="review-list">{reviews.map(Review)}</div>;
MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews
