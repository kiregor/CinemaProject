package com.qa.CinemaProject.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.qa.CinemaProject.entities.Movie;
import com.qa.CinemaProject.entities.Popular;
import com.qa.CinemaProject.repo.MovieRepo;
import com.qa.CinemaProject.repo.SequenceRepo;

@Service
public class MovieService {

	protected MovieRepo movieRepo;
	protected SequenceRepo sequenceRepo;

	public MovieService(MovieRepo movieRepo, SequenceRepo sequenceRepo) {
		this.movieRepo = movieRepo;
		this.sequenceRepo = sequenceRepo;
	}

	public void createMovie(Movie movie) {
		movie.setId(sequenceRepo.getNextSequenceId("movie"));
		this.movieRepo.save(movie);
	}

	public Movie getMovie(long id) {
		if (this.movieRepo.existsById(id)) {
			return this.movieRepo.findById(id).get();
		} else {
			return new Movie();
		}
	}

	public List<Movie> getAllMovies() {
		return this.movieRepo.findAll();
	}

	public void updateMovie(Movie movie) {
		this.movieRepo.updateMovie(movie);
	}

	public void deleteMovie(long id) {
		this.movieRepo.deleteById(id);
	}
	
	public Popular getPopular(String movieOne, String movieTwo, String movieThree) {
		Popular popular = new Popular(
				movieRepo.findAll().stream().filter(m -> m.getMovieName().equals(movieOne)).findFirst().get().getimdbId(),
				movieRepo.findAll().stream().filter(m -> m.getMovieName().equals(movieTwo)).findFirst().get().getimdbId(),
				movieRepo.findAll().stream().filter(m -> m.getMovieName().equals(movieThree)).findFirst().get().getimdbId());
		
		return popular;
	}
}
