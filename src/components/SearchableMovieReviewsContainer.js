import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component{
  constructor(){
    super()
    this.state = {
      reviews: [],
      searchTerm: ""
    }
  }

  render(){
    return(
      <React.Fragment>
        <form id='search-form' onSubmit={this.handleSubmit} >
          <input type='text' onChange={this.handleChange} />
          <input id='submit' type='submit' name='submit' value='Search' />
        </form>
        <h2 id='results-header'>Search Results:</h2>
        <div id='search-results'>

        {this.state.reviews.length === 0 ? <p>Enter search terms above!</p> : <MovieReviews genReviews={this.genReviews} reviews={this.state.reviews} />}
        </div>
      </React.Fragment>
    );
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch(URL + `&query=${this.state.searchTerm}`)
      .then(response => response.json())
        .then(json => {
          if(json.results.length > 0){
            this.setState({reviews: json.results})
        }})
  }

  handleChange = (e) => {
    this.setState({searchTerm: e.target.value});
  }

  genReviews(reviews) {
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
}
