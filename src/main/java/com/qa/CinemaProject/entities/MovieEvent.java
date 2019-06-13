package com.qa.CinemaProject.entities;

import org.springframework.data.annotation.Id;

public class MovieEvent {
	
	@Id
	private long id;
	private long movieId;
	private String screenId;
	private String seatsIOKey;
	
	public MovieEvent() {}
	
	public MovieEvent(long movieId, String screenId) {
		this.movieId = movieId;
		this.screenId = screenId;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public long getMovieId() {
		return movieId;
	}

	public void setMovieId(long movieId) {
		this.movieId = movieId;
	}

	public String getScreenId() {
		return screenId;
	}

	public void setScreenId(String screenId) {
		this.screenId = screenId;
	}

	public String getSeatsIOKey() {
		return seatsIOKey;
	}

	public void setSeatsIOKey(String seatsIOKey) {
		this.seatsIOKey = seatsIOKey;
	}

	@Override
	public String toString() {
		return "Event [id=" + id + ", movieId=" + movieId + ", screenId=" + screenId + "]";
	}
	
}
