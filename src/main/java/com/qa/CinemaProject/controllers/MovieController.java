package com.qa.CinemaProject.controllers;

import java.util.List;


import javax.mail.MessagingException;
import javax.mail.internet.AddressException;

import org.springframework.beans.factory.annotation.Value;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static com.qa.CinemaProject.constants.MappingConstants.CREATE_MOVIE;
import static com.qa.CinemaProject.constants.MappingConstants.GET_ALL_MOVIES;
import static com.qa.CinemaProject.constants.MappingConstants.GET_MOVIE_ID;
import static com.qa.CinemaProject.constants.MappingConstants.UPDATE_MOVIE;
import static com.qa.CinemaProject.constants.MappingConstants.DELETE_MOVIE;
import static com.qa.CinemaProject.constants.MappingConstants.PRICE_LIST;
import static com.qa.CinemaProject.constants.MappingConstants.SEND_EMAIL;
import static com.qa.CinemaProject.constants.MappingConstants.PAYMENT;
import static com.qa.CinemaProject.constants.MappingConstants.BOOKING;
import static com.qa.CinemaProject.constants.MappingConstants.GET_ALL_BOOKINGS;
import static com.qa.CinemaProject.constants.MappingConstants.CREATE_SINGLE_BOOKING;
import com.qa.CinemaProject.email.Email;
import com.qa.CinemaProject.email.EmailApplication;
import com.qa.CinemaProject.entities.Booking;
import com.qa.CinemaProject.entities.Movie;
import com.qa.CinemaProject.entities.PriceList;
import com.qa.CinemaProject.service.BookingService;
import com.qa.CinemaProject.service.MovieService;
import com.qa.CinemaProject.service.PaymentService;
import com.stripe.exception.StripeException;

@RequestMapping
@RestController
@CrossOrigin(origins = "http://localhost:3000") 
public class MovieController {
	
	private MovieService movieService;
	private PaymentService paymentService;
	private BookingService bookingService;
	private EmailApplication email;
  
	@Value("${adult.price}")
	private String adultPrice;
	@Value("${child.price}")
	private String childPrice;
	@Value("${concessions.price}")
	private String concessionsPrice;
	
	public MovieController(MovieService movieService, PaymentService paymentService, BookingService bookingService, EmailApplication email) {
		this.movieService = movieService;
		this.paymentService = paymentService;
		this.bookingService = bookingService;
		this.email = email;
	}
	
	@PostMapping(CREATE_MOVIE)
	public void createMovie(@RequestBody Movie movie){
		this.movieService.createMovie(movie);
	}
	
	@GetMapping(GET_ALL_MOVIES)
	public List<Movie> getAllMovies() {
		return this.movieService.getAllMovies();
	}
	
	@GetMapping(GET_MOVIE_ID)
	public Movie getMovie(@PathVariable Long id) {
		return this.movieService.getMovie(id);
	}
	
	@PostMapping(UPDATE_MOVIE)
	public void updateMovie(@RequestBody Movie movie) {
		this.movieService.updateMovie(movie);
	}
	
	@DeleteMapping(DELETE_MOVIE)
	public void deleteMovie(@PathVariable Long id) {
		this.movieService.deleteMovie(id);
	}
	
	@GetMapping(PRICE_LIST)
	public PriceList getPriceList() {
		return new PriceList(adultPrice, childPrice, concessionsPrice);
	} 
  
    @PostMapping(SEND_EMAIL)
	public Email sendEmail(@RequestBody Email body) throws AddressException, MessagingException {
		email.sendMail(body);
		return body;
	}
  
	@PostMapping(PAYMENT)
	public void payment(@RequestBody String id) throws StripeException {
		this.paymentService.makePayment(id);
	}
	
	@PostMapping(BOOKING)
	public void booking(@RequestBody String id, @RequestBody Booking booking) throws StripeException {
		this.paymentService.makePayment(id);
		this.bookingService.saveBooking(booking);
	}
	
	@PostMapping(CREATE_SINGLE_BOOKING)
	public void testBooking(@RequestBody Booking booking) {
		this.bookingService.saveBooking(booking);
	}
	
	@GetMapping(GET_ALL_BOOKINGS)
	public List<Booking> getAllBookings(){
		return this.bookingService.getAllBookings();
	}

}
