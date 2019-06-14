package com.qa.CinemaProject.test.repo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import com.qa.CinemaProject.entities.Booking;
import com.qa.CinemaProject.entities.MovieEvent;
import com.qa.CinemaProject.repo.EventRepo;
import com.qa.CinemaProject.repo.SequenceRepo;
import com.qa.CinemaProject.repo.SequenceRepoImpl;
import static com.qa.CinemaProject.constants.MappingConstants.*;
/**
 * A test implementation of the BookingService, using an embedded MongoDB instance.
 * Is identical to com.qa.CinemaProject.service.BookingService but replaces the
 * actual MongoDB instance. This class uses the Sequence Repository for incrementing the
 * id field, like the actual BookingService.
 * @author Admin
 *
 */
@Service
public class EmbeddedMovieEventService {
	
	@Autowired
	MongoTemplate mongoTemplate;
	
	@Autowired
	SequenceRepo sri;
	
	public void createEvent(MovieEvent movieEvent) {
		movieEvent.setId(sri.getNextSequenceId(EVENT_COLLECTION));
		this.mongoTemplate.save(movieEvent);
	}
	
	public MovieEvent retrieveEvent(long id) {
		Query q = new Query();
		q.addCriteria(Criteria.where("id").is(id));
		if (this.mongoTemplate.exists(q, EVENT_COLLECTION)) {
			return this.mongoTemplate.find(q, MovieEvent.class).get(0);
		} else {
			return new MovieEvent();
		}
	}
	
	public List<MovieEvent> getAllEvents(){
		return this.mongoTemplate.findAll(MovieEvent.class);
	}
	/**
	 * Utility function that ensures the repository is empty between tests.
	 */
	public void clear() {
		this.mongoTemplate.dropCollection(MovieEvent.class);
	}

}
