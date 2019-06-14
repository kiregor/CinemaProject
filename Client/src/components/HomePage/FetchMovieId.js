import React, {Component} from 'react';
import { Spinner } from 'reactstrap';
import FetchPosterPath from './FetchPosterPath';

class FetchMovieId extends Component{
    constructor(props){
        super(props);
        this.state= {
            movieId: [],
            isLoaded: false,
        }
    }

    componentDidMount = (e) => {
        fetch(`http://192.168.1.102:8080/getPopular`)
        .then(data => data.json())
        .then(data => {
            console.log(data);
            this.setState({ 
                movie: [data.results],
                isLoaded: true,
            })
        })
    }
        
    render() {
        var { isLoaded} = this.state;
        if (!isLoaded) {
            return <div ><Spinner/></div>
        }
        else {
            return(
                <div className="ApiFetchPoster">
                    <FetchPosterPath movieId={this.state.movieId}/>
                </div>
            );
        }
    }
}

export default FetchMovieId;