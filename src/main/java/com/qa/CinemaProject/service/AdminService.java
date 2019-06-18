package com.qa.CinemaProject.service;

import org.springframework.stereotype.Service;

import com.qa.CinemaProject.entities.MovieTemp;
import com.qa.CinemaProject.seatsio.SeatsIoApi;

@Service
public class AdminService {
	
	MovieEventService eventService;
	SeatsIoApi seatsApi;
	
	public AdminService(MovieEventService eventService, SeatsIoApi seatsApi) {
		this.eventService = eventService;
		this.seatsApi = seatsApi;
	}
	
	public void newEvent(MovieTemp movie) {
		eventService.createEvent(seatsApi.createEvent(movie.getMovieId(), movie.getScreenId(), movie.getEventKey(), movie.getDate()));
	}
	
}
