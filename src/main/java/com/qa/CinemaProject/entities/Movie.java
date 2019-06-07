package com.qa.CinemaProject.entities;

import org.springframework.data.annotation.Id;

public class Movie {

	@Id
	private long id;
	private String movieName;
	
	public Movie(){	}
	
	public Movie(String movieName) {
		this.movieName = movieName;
	}
	
	@Override
	public String toString() {
		return String.format("Movie[id=%s, movieName='%s']", id, movieName);
	}
	
	public long getId() {
		return id;
	}
	
	public String getMovieName() {
		return movieName;
	}
}
