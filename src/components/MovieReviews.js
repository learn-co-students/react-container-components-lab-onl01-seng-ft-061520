import React from 'react';

const MovieReviews = ({ reviews }) => (
    <div className="review-list">
        { reviews.map(review => <div className="review">
            <h1>Movie: {review.display_title}</h1>
            <img src={review.multimedia.src}></img>
            <p>Critic: {review.byline}</p>
            <p>Critics Pick: {review.critics_pick}</p>
            <p>Summary: {review.summary_short}</p>
            </div>)
        }
    </div>
)

export default MovieReviews;