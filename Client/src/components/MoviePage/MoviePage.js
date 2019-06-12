import React, { Component } from 'react';

class MoviePage extends Component {
    render() {
        return (
            <div className='MoviePage'>
                <p>{this.props.match.params.movietitle}</p>
            </div>
        )
    }
}

export default MoviePage;