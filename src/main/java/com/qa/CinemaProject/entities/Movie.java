package com.qa.CinemaProject.entities;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.annotation.Id;

import com.qa.CinemaProject.repo.SequenceRepo;

public class Movie {

	@Autowired
	static SequenceRepo seqRep;
	
	@Id
	private long id;
	private String movieName;
	private String imdbId;
	
	public Movie(){	}
	
	public Movie(String movieName, String imdbId) {
		this.movieName = movieName;
		this.imdbId = imdbId;
	}
	
	@Override
	public String toString() {
		return String.format("Movie[id=%s, movieName='%s', imdbId='%s']", id, movieName, imdbId);
	}
	
	public long getId() {
		return id;
	}
	
	public void setId(long id) {
		this.id = id;
	}
	
	public String getMovieName() {
		return movieName;
	}
	
	public String getimdbId() {
		return imdbId;
	}
	
}
