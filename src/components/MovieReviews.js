// Code MovieReviews Here
import React from 'react';

const genReviews = (reviews) => {
  let results = reviews.map((review, dex) => {
    return (
      <div className='review' key={dex}>
        {review.multimedia === null ? <h3>No image associated</h3> : <img src={review.multimedia.src} alt='Review hero'/>}
        <a href={review.link}><h2 className='title'>{review.headline}</h2></a>
        <h3 className='byline'>{review.byline}</h3>
        <h4 className='rating'>{review.rating}</h4>
        <h4 className='date'>Publication Date: {review.publication_date}</h4>
        <p className='summary'>{review.summary}</p>
      </div>
  )});
  return results;
}

const MovieReviews = ({ genReviews, reviews }) => {
  return (
    <div className='review-list'>
      {genReviews(reviews)}
    </div>
  )
};
MovieReviews.defaultProps = {
  genReviews: genReviews
}
export default MovieReviews;
