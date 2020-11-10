import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super();
        this.state = {
            reviews: [],
            searchTerm: ""
        };
    }

    handleSubmit = event => {
        setTimeout(() => (console.log(this.state)), 10000)
        event.preventDefault()
        fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ&query=${this.state.searchTerm}`)
        .then(resp => resp.json())
        .then(json => this.setState({
            reviews: json.results
        }))
    }

    handleSearchTermChange = event => {
        this.setState({
            searchTerm: event.target.value
        })
    }
    
    render() {
        return (
            <div>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <input 
                        type="text"
                        onChange={event => this.handleSearchTermChange(event)}
                        value = {this.state.searchTerm}
                    />
                </form> 
                <MovieReviews reviews={this.state.reviews} />
            </div>
            
        );
    }
}

export default SearchableMovieReviewsContainer;