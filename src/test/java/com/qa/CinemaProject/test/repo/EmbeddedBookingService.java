package com.qa.CinemaProject.test.repo;

import static com.qa.CinemaProject.constants.MappingConstants.BOOKING_COLLECTION;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import com.qa.CinemaProject.entities.Booking;
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
public class EmbeddedBookingService {
	
	@Autowired
	MongoTemplate mongoTemplate;
	
	@Autowired
	SequenceRepo sri;
	
	public void saveBooking(Booking booking) {
		booking.setId(sri.getNextSequenceId(BOOKING_COLLECTION));
		this.mongoTemplate.save(booking);
	}

	public Booking retrieveBooking(long id) {
		Query q = new Query();
		q.addCriteria(Criteria.where("id").is(id));
		if (this.mongoTemplate.exists(q, BOOKING_COLLECTION)) {
			return this.mongoTemplate.find(q, Booking.class).get(0);
		} else {
			return new Booking();
		}
	}

	public List<Booking> getAllBookings() {
		return this.mongoTemplate.findAll(Booking.class);
	}
	
	/**
	 * Utility function that ensures the repository is empty between tests.
	 */
	public void clear() {
		this.mongoTemplate.dropCollection(Booking.class);
	}

}
