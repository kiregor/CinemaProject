package com.qa.CinemaProject.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.qa.CinemaProject.entities.Movie;
import com.qa.CinemaProject.entities.PriceList;
import com.qa.CinemaProject.service.MovieService;
import com.qa.CinemaProject.service.PriceListService;

@RequestMapping
@RestController
@CrossOrigin(origins = "http://localhost:3000") 
public class MovieController {
	
	private MovieService movieService;
	private PriceList priceList;
	
	public MovieController(MovieService movieService) {
		this.movieService = movieService;
		priceList = PriceListService.load();
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
		return priceList;
	}
}
