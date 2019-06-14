package com.qa.CinemaProject.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.qa.CinemaProject.entities.MovieEvent;
import com.qa.CinemaProject.repo.EventRepo;
import com.qa.CinemaProject.repo.SequenceRepo;

@Service
public class MovieEventService {
	
	private EventRepo eventRepo;
	private SequenceRepo sequenceRepo;
	
	public MovieEventService(EventRepo eventRepo, SequenceRepo sequenceRepo) {
		this.eventRepo = eventRepo;
		this.sequenceRepo = sequenceRepo;
	}
	
	public void createEvent(MovieEvent movieEvent) {
		movieEvent.setId(sequenceRepo.getNextSequenceId("event"));
		this.eventRepo.save(movieEvent);
	}
	
	public MovieEvent retrieveEvent(long id) {
		if (this.eventRepo.existsById(id)) {
			return this.eventRepo.findById(id).get();
		} else {
			return new MovieEvent();
		}
	}
	
	public List<MovieEvent> getAllEvents(){
		return this.eventRepo.findAll();
	}

}
