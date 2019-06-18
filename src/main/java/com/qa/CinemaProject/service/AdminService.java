package com.qa.CinemaProject.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.qa.CinemaProject.entities.Login;
import com.qa.CinemaProject.entities.MovieTemp;
import com.qa.CinemaProject.seatsio.SeatsIoApi;

@Service
public class AdminService {
	
	private MovieEventService eventService;
	private SeatsIoApi seatsApi;
	private Login login;
	
	public AdminService(MovieEventService eventService, SeatsIoApi seatsApi, @Value("${user.name}") String username, @Value("${pass.word") String password) {
		this.eventService = eventService;
		this.seatsApi = seatsApi;
		this.login = new Login(username, password);
	}
	
	public void newEvent(MovieTemp movie) {
		eventService.createEvent(seatsApi.createEvent(movie.getMovieId(), movie.getScreenId(), movie.getEventKey(), movie.getDate()));
	}
	
	public boolean login(Login login) {
		return this.login.equals(login);
	}
	
}
