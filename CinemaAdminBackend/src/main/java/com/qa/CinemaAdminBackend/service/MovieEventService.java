package com.qa.CinemaAdminBackend.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.qa.CinemaAdminBackend.entities.Movie;
import com.qa.CinemaAdminBackend.entities.MovieEvent;
import com.qa.CinemaAdminBackend.repo.EventRepo;
import com.qa.CinemaAdminBackend.repo.MovieRepo;
import com.qa.CinemaAdminBackend.repo.SequenceRepo;

@Service
public class MovieEventService {
	
	protected EventRepo eventRepo;
	private MovieRepo movieRepo;
	protected SequenceRepo sequenceRepo;
	
	public MovieEventService(EventRepo eventRepo, SequenceRepo sequenceRepo, MovieRepo movieRepo) {
		this.eventRepo = eventRepo;
		this.sequenceRepo = sequenceRepo;
		this.movieRepo = movieRepo;
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
	
	public List<MovieEvent> getEventsByMovie(Movie movie){
		System.out.println(movie.getMovieName());
		Long movieId = this.movieRepo.findAll().stream().filter(m -> m.getMovieName().equals(movie.getMovieName())).findFirst().get().getId();
		System.out.println(movieId);
		return this.eventRepo.findAll().stream().filter(m -> m.getMovieId() == movieId).collect(Collectors.toList());
	}

}
