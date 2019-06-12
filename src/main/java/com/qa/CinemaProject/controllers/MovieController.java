package com.qa.CinemaProject.controllers;

import java.util.List;


import javax.mail.MessagingException;
import javax.mail.internet.AddressException;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.beans.factory.annotation.Value;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.qa.CinemaProject.email.Email;
import com.qa.CinemaProject.email.EmailApplication;
import com.qa.CinemaProject.entities.Booking;
import com.qa.CinemaProject.entities.BookingPayment;
import com.qa.CinemaProject.entities.Movie;
import com.qa.CinemaProject.entities.PriceList;
import com.qa.CinemaProject.entities.Ticket;
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

	@Autowired
	private EmailApplication email;
  
	@Value("${adult.price}")
	private String adultPrice;
	@Value("${child.price}")
	private String childPrice;
	@Value("${concessions.price}")
	private String concessionsPrice;
	
	public MovieController(MovieService movieService, PaymentService paymentService, BookingService bookingService) {
		this.movieService = movieService;
		this.paymentService = paymentService;
		this.bookingService = bookingService;
	}
	
	@PostMapping("/createMovie")
	public void createMovie(@RequestBody Movie movie){
		this.movieService.createMovie(movie);
	}
	
	@GetMapping("/getAllMovies")
	public List<Movie> getAllMovies() {
		return this.movieService.getAllMovies();
	}
	
	@GetMapping("/getMovie/{id}")
	public Movie getMovie(@PathVariable Long id) {
		return this.movieService.getMovie(id);
	}
	
	@PostMapping("/updateMovie")
	public void updateMovie(@RequestBody Movie movie) {
		this.movieService.updateMovie(movie);
	}
	
	@DeleteMapping("/deleteMovie/{id}")
	public void deleteMovie(@PathVariable Long id) {
		this.movieService.deleteMovie(id);
	}
	
	@GetMapping("/priceList")
	public PriceList getPriceList() {
		return new PriceList(adultPrice, childPrice, concessionsPrice);
	} 
  
    @PostMapping("/sendemail")
	public Email sendEmail(@RequestBody Email body) throws AddressException, MessagingException {
		email.sendMail(body);
		return body;
	}
	
	@PostMapping("/booking")
	public void booking(@RequestBody BookingPayment booking ) throws StripeException {
		int cost = booking.getBooking().getTickets().stream().mapToInt(t -> t.getPrice()).sum();
		this.paymentService.makePayment(booking.getToken(),cost);
		System.out.println(booking.getToken());
		this.bookingService.saveBooking(booking.getBooking());
	}
}
