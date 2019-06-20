package com.qa.CinemaAdminBackend.seatsio;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.qa.CinemaAdminBackend.entities.MovieEvent;

import seatsio.SeatsioClient;
import seatsio.events.Event;

@Service
public class SeatsIoApi {
	
	@Value("${2D.screen}")
	private String key;
	private SeatsioClient client;
	
	public SeatsIoApi(@Value("${SeatsIo.Key}") String key) {
		this.client = new SeatsioClient(key);
	}
	
	public MovieEvent createEvent(long movieId, String screenId, String eventKey, Date date) {
		Event event = client.events.create(key, eventKey);
		MovieEvent tempEvent = new MovieEvent(movieId, screenId, event.key, date);
		return tempEvent;
	}

}
