package com.qa.CinemaProject.test.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.qa.CinemaProject.entities.Movie;
import com.qa.CinemaProject.repo.SequenceRepo;
import com.qa.CinemaProject.service.MovieService;
import com.qa.CinemaProject.test.repo.EmbeddedMovieRepo;

@Service
public class EmbeddedMovieService extends MovieService implements EmbeddedService <Movie> {

	public EmbeddedMovieService(EmbeddedMovieRepo movieRepo, SequenceRepo sequenceRepo) {
		super(movieRepo, sequenceRepo);
		// TODO Auto-generated constructor stub
	}

	@Override
	public void clear() {
		this.movieRepo.deleteAll();
	}

	@Override
	public void delete(Movie entity) {
		this.movieRepo.delete(entity);
	}

	@Override
	public List<Movie> getAllEntities() {
		return this.getAllMovies();
	}
	
}
