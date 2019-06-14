package com.qa.CinemaProject.test.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import com.qa.CinemaProject.entities.Movie;
import com.qa.CinemaProject.entities.Popular;
import com.qa.CinemaProject.repo.SequenceRepo;
import static com.qa.CinemaProject.constants.MappingConstants.*;

@Service
public class EmbeddedMovieService extends EmbeddedService <Movie> {
	
	public EmbeddedMovieService() {
		super(MOVIE_COLLECTION, Movie.class);
	}
	
	public void createMovie(Movie movie) {
		movie.setId(sequenceRepo.getNextSequenceId("movie"));
		this.mongoTemplate.save(movie);
	}
	
	private Optional<Movie> findMovie(long id) {
		return super.findEntity(id);
	}

	public Movie getMovie(long id) {
		return this.findMovie(id).orElse(new Movie());
	}

	public List<Movie> getAllMovies() {
		return super.getAllEntities();
	}

	public void updateMovie(Movie movie) {
		Query query = new Query(Criteria.where("id").is(movie.getId()));
		Update update = new Update();
		update.set("movieName", movie.getMovieName());
		mongoTemplate.updateFirst(query, update, Movie.class);
	}

	public void deleteMovie(long id) {
		super.deleteEntityById(id);
	}
	
	public Popular getPopular(String movieOne, String movieTwo, String movieThree) {
		Popular popular = new Popular(
				this.getAllMovies().stream().filter(m -> m.getMovieName().equals(movieOne)).findFirst().get().getimdbId(),
				this.getAllMovies().stream().filter(m -> m.getMovieName().equals(movieTwo)).findFirst().get().getimdbId(),
				this.getAllMovies().stream().filter(m -> m.getMovieName().equals(movieThree)).findFirst().get().getimdbId());
		return popular;
	}
}
