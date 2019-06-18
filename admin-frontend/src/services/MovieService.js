import axios from 'axios';
import { LOCAL_BACKEND_SERVER, PRICE_LIST, API_KEY, CHECK_MOVIES, GET_ALL_MOVIES } from '../Constants'

class Movie {
    movieName
    imdbId;
    constructor(movieName, imdbId) {
        this.movieName = movieName;
        this.imdbId = imdbId;
    }
}

class MovieService {
    url;
    constructor(url) {
        this.url = url;
    }

    createMoviesFromTmdb(results) {
        let len = results.length;
        let movies = [];
        for(let i = 0; i < len; ++i) {
            movies.push(new Movie(results[i].title, results[i].id));
        }
        return movies;
    }

    /**
     * Get the first two pages of movies from tmdb. These are the movies shown by QACinemas
     */
    getMoviesFromTmdb(onComplete) {
        let data = { results: [] }
        axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`)
            .then(responseOne => {
                let pageOneResults = responseOne.data.results
                axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=2`)
                    .then(responseTwo => {
                        let pageTwoResults = responseTwo.data.results
                        let allResults = pageOneResults.concat(pageTwoResults)
                        onComplete(this.createMoviesFromTmdb(allResults))
                    })
                    .catch(error => {
                        return error;
                    })
            })
            .catch(error => {
                return error;
            })
    }

    sendMoviesToBackend(movies) {
        return axios.post(`${LOCAL_BACKEND_SERVER}/${CHECK_MOVIES}`, movies)
    }
    getMoviesFromBackend() {
        return axios.get(`${LOCAL_BACKEND_SERVER}/${GET_ALL_MOVIES}`)
    }

}

export default new MovieService(LOCAL_BACKEND_SERVER);