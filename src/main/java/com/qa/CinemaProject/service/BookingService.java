package com.qa.CinemaProject.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.qa.CinemaProject.entities.Booking;
import com.qa.CinemaProject.repo.BookingRepo;
import com.qa.CinemaProject.repo.SequenceRepo;

@Service
public class BookingService {

	private BookingRepo bookingRepo;
	private SequenceRepo sequenceRepo;

	public BookingService(BookingRepo bookingRepo, SequenceRepo sequenceRepo) {
		this.bookingRepo = bookingRepo;
		this.sequenceRepo = sequenceRepo;
	}

	public void saveBooking(Booking booking) {
		booking.setId(sequenceRepo.getNextSequenceId("booking"));
		this.bookingRepo.save(booking);
	}

	public Booking retrieveBooking(long id) {
		if (this.bookingRepo.existsById(id)) {
			return this.bookingRepo.findById(id).get();
		} else {
			return new Booking();
		}
	}

	public List<Booking> getAllBookings() {
		return this.bookingRepo.findAll();
	}
}
