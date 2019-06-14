package com.qa.CinemaProject.entities;

public class Popular {
	private String movieOne;
	private String movieTwo;
	private String movieThree;
	
	public Popular(String movieOne, String movieTwo, String movieThree) {
		this.movieOne = movieOne;
		this.movieTwo = movieTwo;
		this.movieThree = movieThree;
	}

	public String getMovieOne() {
		return movieOne;
	}

	public void setMovieOne(String movieOne) {
		this.movieOne = movieOne;
	}

	public String getMovieTwo() {
		return movieTwo;
	}

	public void setMovieTwo(String movieTwo) {
		this.movieTwo = movieTwo;
	}

	public String getMovieThree() {
		return movieThree;
	}

	public void setMovieThree(String movieThree) {
		this.movieThree = movieThree;
	}

	@Override
	public String toString() {
		return "Popular [movieOne=" + movieOne + ", movieTwo=" + movieTwo + ", movieThree=" + movieThree + "]";
	}
	
}
