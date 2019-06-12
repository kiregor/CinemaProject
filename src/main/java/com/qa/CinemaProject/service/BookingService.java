package com.qa.CinemaProject.service;

import org.springframework.stereotype.Service;

import com.qa.CinemaProject.entities.Booking;
import com.qa.CinemaProject.entities.Movie;
import com.qa.CinemaProject.repo.BookingRepo;

@Service
public class BookingService {

	private BookingRepo bookingRepo;

	public BookingService(BookingRepo bookingRepo) {
		this.bookingRepo = bookingRepo;
	}

	public void saveBooking(Booking booking) {
		this.bookingRepo.save(booking);
	}

	public Booking retrieveBooking(long id) {

		if (this.bookingRepo.existsById(id)) {
			return this.bookingRepo.findById(id).get();
		} else {
			return new Booking();
		}
	}
}
