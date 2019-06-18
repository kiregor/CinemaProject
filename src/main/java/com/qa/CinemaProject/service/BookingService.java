package com.qa.CinemaProject.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.qa.CinemaProject.entities.Booking;
import com.qa.CinemaProject.repo.BookingRepo;
import com.qa.CinemaProject.repo.SequenceRepo;
import com.qa.CinemaProject.seatsio.SeatsIoApi;

@Service
public class BookingService {

	private BookingRepo bookingRepo;
	private SequenceRepo sequenceRepo;
	private SeatsIoApi seatsApi;

	public BookingService(BookingRepo bookingRepo, SequenceRepo sequenceRepo, SeatsIoApi seatsApi) {
		this.bookingRepo = bookingRepo;
		this.sequenceRepo = sequenceRepo;
		this.seatsApi = seatsApi;
	}

	public void saveBooking(Booking booking, String holdToken, String eventToken) {
		booking.setId(sequenceRepo.getNextSequenceId("booking"));
		this.bookingRepo.save(booking);
		this.seatsApi.bookTickets(booking.getTickets(), eventToken , holdToken);
	}

	public Booking retrieveBooking(long id) {

		if (this.bookingRepo.existsById(id)) {
			return this.bookingRepo.findById(id).get();
		} else {
			return new Booking();
		}
	}
	
	public List<Booking> getUserBookings(String userId) {
		return this.bookingRepo.findAll().stream().filter(b -> b.getUserId().equals(userId)).collect(Collectors.toList());
	}
	
	public List<Booking> getAllBookings(){
		return this.bookingRepo.findAll();
	}
}
