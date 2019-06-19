package com.qa.CinemaProject.tests.junit.services;

import java.util.List;

import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Service;
import org.springframework.test.context.ActiveProfiles;

import com.qa.CinemaProject.entities.MovieEvent;
import com.qa.CinemaProject.repo.MovieRepo;
import com.qa.CinemaProject.repo.SequenceRepo;
import com.qa.CinemaProject.service.MovieEventService;
import com.qa.CinemaProject.tests.junit.repositories.EmbeddedMovieEventRepo;
import com.qa.CinemaProject.tests.junit.repositories.EmbeddedMovieRepo;
/**
 * A test implementation of the BookingService, using an embedded MongoDB instance.
 * Is identical to com.qa.CinemaProject.service.BookingService but replaces the
 * actual MongoDB instance. This class uses the Sequence Repository for incrementing the
 * id field, like the actual BookingService.
 * @author Admin
 *
 */
//@Service("embeddedMovieEventService")
public class EmbeddedMovieEventService extends MovieEventService implements EmbeddedService<MovieEvent> {

	public EmbeddedMovieEventService(EmbeddedMovieEventRepo eventRepo, SequenceRepo sequenceRepo, EmbeddedMovieRepo movieRepo) {
		super(eventRepo, sequenceRepo, movieRepo);
		// TODO Auto-generated constructor stub
	}
	
	@Override
	public void clear() {
		// TODO Auto-generated method stub
		this.eventRepo.deleteAll();
	}

	@Override
	public void delete(MovieEvent entity) {
		this.eventRepo.delete(entity);
	}
	
	@Override
	public List<MovieEvent> getAllEntities() {
		return super.getAllEvents();
	}
}
