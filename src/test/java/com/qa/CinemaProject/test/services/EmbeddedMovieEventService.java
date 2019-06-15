package com.qa.CinemaProject.test.services;

import static com.qa.CinemaProject.constants.MappingConstants.EVENT_COLLECTION;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import com.qa.CinemaProject.entities.MovieEvent;
import com.qa.CinemaProject.repo.SequenceRepo;
/**
 * A test implementation of the BookingService, using an embedded MongoDB instance.
 * Is identical to com.qa.CinemaProject.service.BookingService but replaces the
 * actual MongoDB instance. This class uses the Sequence Repository for incrementing the
 * id field, like the actual BookingService.
 * @author Admin
 *
 */
@Service
public class EmbeddedMovieEventService extends EmbeddedService<MovieEvent> {
	
	public EmbeddedMovieEventService() {
		super(EVENT_COLLECTION, MovieEvent.class);
		// TODO Auto-generated constructor stub
	}
	
	public void createEvent(MovieEvent movieEvent) {
		movieEvent.setId(sequenceRepo.getNextSequenceId(EVENT_COLLECTION));
		this.mongoTemplate.save(movieEvent);
	}
	
	public MovieEvent retrieveEvent(long id) {
		return this.findEntity(id).orElse(new MovieEvent());
	}


}
