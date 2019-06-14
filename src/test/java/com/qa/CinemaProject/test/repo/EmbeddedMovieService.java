package com.qa.CinemaProject.test.repo;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;

import com.qa.CinemaProject.entities.Movie;
import com.qa.CinemaProject.entities.Popular;
import com.qa.CinemaProject.repo.SequenceRepo;
import static com.qa.CinemaProject.constants.MappingConstants.*;

public class EmbeddedMovieService {
	
	@Autowired
	SequenceRepo sequenceRepo;
	
	@Autowired
	MongoTemplate mongoTemplate;
	
	public void createMovie(Movie movie) {
		movie.setId(sequenceRepo.getNextSequenceId("movie"));
		this.mongoTemplate.save(movie);
	}
	
	private Optional<Movie> findMovie(long id) {
		Query q = new Query();
		q.addCriteria(Criteria.where("id").is(id));
		if (this.mongoTemplate.exists(q, MOVIE_COLLECTION)) {
			return Optional.of(this.mongoTemplate.find(q, Movie.class).get(0));
		} else {
			return Optional.empty();
		}
	}

	public Movie getMovie(long id) {
		Optional<Movie> maybeMovie = findMovie(id);
		if(maybeMovie.isPresent()) {
			return maybeMovie.get();
		} else {
			return new Movie();
		}
	}

	public List<Movie> getAllMovies() {
		return this.mongoTemplate.findAll(Movie.class);
	}

	public void updateMovie(Movie movie) {
		Query query = new Query(Criteria.where("id").is(movie.getId()));
		Update update = new Update();
		update.set("content", movie.getMovieName());
		
		mongoTemplate.updateFirst(query, update, Movie.class);
	}

	public void deleteMovie(long id) {
		this.findMovie(id).ifPresent(movie -> mongoTemplate.remove(movie));
	}
	
	public Popular getPopular(String movieOne, String movieTwo, String movieThree) {
		Popular popular = new Popular(
				this.getAllMovies().stream().filter(m -> m.getMovieName().equals(movieOne)).findFirst().get().getimdbId(),
				this.getAllMovies().stream().filter(m -> m.getMovieName().equals(movieTwo)).findFirst().get().getimdbId(),
				this.getAllMovies().stream().filter(m -> m.getMovieName().equals(movieThree)).findFirst().get().getimdbId());
		return popular;
	}

}
