package com.qa.CinemaAdminBackend.repo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;

import com.qa.CinemaAdminBackend.entities.Movie;

public class MovieRepoImpl implements MovieRepoCustom {

	@Autowired
	MongoTemplate mongoTemplate;
	
	@Override
	public void updateMovie(Movie movie) {
		
		Query query = new Query(Criteria.where("id").is(movie.getId()));
		Update update = new Update();
		update.set("movieName", movie.getMovieName());
		mongoTemplate.updateFirst(query, update, Movie.class);
		update.set("imdbId", movie.getimdbId());
		mongoTemplate.updateFirst(query, update, Movie.class);
	}
	
	public Movie findByName(String movieName) {
		Query query = new Query(Criteria.where("movieName").is(movieName));
		return mongoTemplate.find(query, Movie.class).get(0);
	}
}
