package com.qa.CinemaAdminBackend.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static com.qa.CinemaAdminBackend.constants.MappingConstants.GET_ALL_MOVIES;
import static com.qa.CinemaAdminBackend.constants.MappingConstants.GET_SCREENS;
import static com.qa.CinemaAdminBackend.constants.MappingConstants.SAVE_SCREEN;

import java.util.List;

import static com.qa.CinemaAdminBackend.constants.MappingConstants.CREATE_EVENT;
import static com.qa.CinemaAdminBackend.constants.MappingConstants.ADMIN_LOGIN;

import com.qa.CinemaAdminBackend.entities.Login;
import com.qa.CinemaAdminBackend.entities.Movie;
import com.qa.CinemaAdminBackend.entities.MovieTemp;
import com.qa.CinemaAdminBackend.entities.Screen;
import com.qa.CinemaAdminBackend.seatsio.SeatsIoApi;

import com.qa.CinemaAdminBackend.service.AdminService;
import com.qa.CinemaAdminBackend.service.MovieEventService;
import com.qa.CinemaAdminBackend.service.MovieService;
import com.qa.CinemaAdminBackend.service.ScreenService;

@RequestMapping
@RestController
@CrossOrigin(origins = "http://localhost:3001") 
public class AdminController {
	
	private MovieService movieService;
	private ScreenService screenService;
	private AdminService adminService;
	private MovieEventService eventService;
	private SeatsIoApi seatsIo;
	
	public AdminController(MovieService movieService, SeatsIoApi seatsIo, ScreenService screenService, AdminService adminService, MovieEventService eventService) {
		this.movieService = movieService;
		this.screenService = screenService;
		this.adminService = adminService;
		this.eventService = eventService;
		this.seatsIo = seatsIo;
	}
	
	@GetMapping(GET_ALL_MOVIES)
	public List<Movie> getAllMovies() {
		return this.movieService.getAllMovies();
	}
	
	@GetMapping(GET_SCREENS)
	public List<Screen> getAllScreens(){
		return this.screenService.getAllScreens();
	}
	
	@PostMapping(SAVE_SCREEN)
	public void saveScreen(@RequestBody Screen screen) {
		this.screenService.createScreen(screen);
	}
	
	@PostMapping(CREATE_EVENT)
	public void createEvent(@RequestBody MovieTemp movie) {
		this.adminService.newEvent(movie);
	}
	
	@PostMapping(ADMIN_LOGIN)
	public boolean adminLogin(@RequestBody Login login) {
		return this.adminService.login(login);
	}
}
