package com.qa.CinemaAdminBackend.entities;

import java.util.Date;

public class MovieTemp {
	
	private long movieId;
	private String screenId;
	private String eventKey;
	private Date date;
	
	public MovieTemp(long movieId, String screenId, String eventKey, Date date) {
		this.movieId = movieId;
		this.screenId = screenId;
		this.eventKey = eventKey;
		this.date = date;
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

	public String getEventKey() {
		return eventKey;
	}

	public void setEventKey(String eventKey) {
		this.eventKey = eventKey;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	@Override
	public String toString() {
		return "MovieTemp [movieId=" + movieId + ", screenId=" + screenId + ", eventKey=" + eventKey + "]";
	}
	
}
