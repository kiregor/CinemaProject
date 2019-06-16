package com.qa.CinemaProject.test.repo;

import org.springframework.stereotype.Repository;

import com.qa.CinemaProject.entities.Booking;
import com.qa.CinemaProject.repo.BookingRepo;

@Repository
public class EmbeddedBookingRepo extends EmbeddedRepo<Booking> implements BookingRepo {
	public EmbeddedBookingRepo() {
		super(Booking.class);
	}
}
