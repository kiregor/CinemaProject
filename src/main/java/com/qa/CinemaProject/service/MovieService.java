package com.qa.CinemaProject.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.qa.CinemaProject.entities.Movie;
import com.qa.CinemaProject.repo.MovieRepo;
import com.stripe.exception.StripeException;

import stripe.ChargePayment;

@Service
public class MovieService {

	private MovieRepo movieRepo;
	private ChargePayment payment;
	
	@Value("${stripeKey}")
	String key;
	
	public MovieService(MovieRepo movieRepo) {
		this.movieRepo = movieRepo;
		payment = new ChargePayment();
	}
	
	public void createMovie(Movie movie) {
		this.movieRepo.save(movie);
	}
	
	public Movie getMovie(long id) {
		if(this.movieRepo.existsById(id)) {
			return this.movieRepo.findById(id).get();
		}
		else {
			return new Movie();
		}
	}
	
	public List<Movie> getAllMovies(){
		return this.movieRepo.findAll();
	}
	
	public void updateMovie(Movie movie) {
		this.movieRepo.updateMovie(movie);
	}
	
	public void deleteMovie(long id) {
		this.movieRepo.deleteById(id);
	}
	
	public void makePayment(String token) throws StripeException {
		this.payment.makePayment(key,token);
	}
}
