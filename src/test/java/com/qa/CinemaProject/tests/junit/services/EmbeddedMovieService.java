package com.qa.CinemaProject.tests.junit.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.qa.CinemaProject.constants.MappingConstants;
import com.qa.CinemaProject.entities.Movie;
import com.qa.CinemaProject.repo.SequenceRepo;
import com.qa.CinemaProject.service.MovieService;
import com.qa.CinemaProject.tests.junit.config.MongoEmbedConfiguration;
import com.qa.CinemaProject.tests.junit.repositories.EmbeddedMovieRepo;

@Service
public class EmbeddedMovieService extends MovieService implements EmbeddedService <Movie> {
	
	EmbeddedMovieRepo emr;

	public EmbeddedMovieService(EmbeddedMovieRepo movieRepo, SequenceRepo sequenceRepo) {
		super(movieRepo, sequenceRepo);
		this.emr = movieRepo;
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
	
	public void createSequence() {
		MongoEmbedConfiguration.initializeSequences(this.emr.getMongoTemplate());
	}
	
	public void dropSequence() {
		this.emr.dropCollection(MappingConstants.SEQUENCE_COLLECTION);
	}
	
}
