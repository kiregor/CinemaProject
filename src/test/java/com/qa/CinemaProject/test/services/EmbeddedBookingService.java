package com.qa.CinemaProject.test.services;

import static com.qa.CinemaProject.constants.MappingConstants.*;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import com.qa.CinemaProject.entities.Booking;
import com.qa.CinemaProject.repo.SequenceRepo;

@Service
public class EmbeddedBookingService extends EmbeddedService <Booking> {
	
	public EmbeddedBookingService() {
		super(BOOKING_COLLECTION, Booking.class);
	}

	public void saveBooking(Booking booking) {
		booking.setId(sequenceRepo.getNextSequenceId(BOOKING_COLLECTION));
		this.mongoTemplate.save(booking);
	}

	public Booking retrieveBooking(long id) {
		return super.findEntity(id).orElse(new Booking());
	}

	public List<Booking> getAllBookings() {
		return super.getAllEntities();
	}
	
}
