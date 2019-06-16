package com.qa.CinemaProject.tests.junit.repositories;

import org.springframework.stereotype.Repository;

import com.qa.CinemaProject.entities.MovieEvent;
import com.qa.CinemaProject.repo.EventRepo;

@Repository
public class EmbeddedMovieEventRepo extends EmbeddedRepo<MovieEvent> implements EventRepo {
	public EmbeddedMovieEventRepo() {
		super(MovieEvent.class);
	}
}