package com.qa.CinemaProject.tests.junit.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.qa.CinemaProject.entities.Booking;
import com.qa.CinemaProject.repo.BookingRepo;
import com.qa.CinemaProject.repo.SequenceRepo;
import com.qa.CinemaProject.service.BookingService;
import com.qa.CinemaProject.tests.junit.repositories.EmbeddedBookingRepo;

@Service
public class EmbeddedBookingService extends BookingService implements EmbeddedService<Booking> {
	
	EmbeddedBookingRepo bookingRepo;
	
	public EmbeddedBookingService(EmbeddedBookingRepo bookingRepo, SequenceRepo sequenceRepo) {
		super(bookingRepo, sequenceRepo, null );
		this.bookingRepo = bookingRepo;
	}
	
	@Override
	public void clear() {
		this.bookingRepo.deleteAll();
	}

	@Override
	public void delete(Booking booking) {
		this.bookingRepo.delete(booking);
	}

	@Override
	public List<Booking> getAllEntities() {
		return this.bookingRepo.findAll();
		
	}
}
