import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  state = {
    searchTerm: '',
    reviews: []
  }

  handleInput = e => {
    this.setState({searchTerm: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault()
    fetch(URL.concat(this.state.searchTerm))
    .then(response => response.json())
    .then(response => this.setState({reviews: response.results}))
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="search">Search Reviews</label>
          <input type="text" onChange={this.handleInput}/>
          <button type="submit">Submit</button>
        </form>
        {typeof this.state.reviews === 'object' && this.state.reviews.length > 0 && <h2>Movie Review Search:</h2>}
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }

}

export default SearchableMovieReviewsContainer;
