import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {
  constructor(){
    super()
    this.state =  {
      reviews: []
    }
  }

  componentDidMount(){
    fetch(URL)
      .then(response => response.json())
        .then(json => {
          this.setState({reviews: json.results});
        });
  }

  render(){
    return(
      <div className='latest-movie-reviews'>
        <h2>Latest Reviews:</h2>
        <MovieReviews genReviews={this.genReviews} reviews={this.state.reviews} />
      </div>
    )
  }

  genReviews = (reviews) => {
    let results = reviews.map((review, dex) => {
      return (
        <div className='review' key={dex}>
          <img src={review.multimedia.src} alt='Review hero'/>
          <a href={review.link}><h2 className='title'>{review.headline}</h2></a>
          <h3 className='byline'>{review.byline}</h3>
          <h4 className='rating'>{review.rating}</h4>
          <h4 className='date'>Publication Date: {review.publication_date}</h4>
          <p className='summary'>{review.summary}</p>
        </div>
    )});
    return results;
  }
}
