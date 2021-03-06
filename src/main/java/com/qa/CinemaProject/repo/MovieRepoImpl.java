package com.qa.CinemaProject.repo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;

import com.qa.CinemaProject.entities.Movie;

public class MovieRepoImpl implements MovieRepoCustom {

	@Autowired
	MongoTemplate mongoTemplate;
	
	@Override
	public void updateMovie(Movie movie) {
		
		Query query = new Query(Criteria.where("id").is(movie.getId()));
		Update update = new Update();
		update.set("content", movie.getMovieName());
		
		mongoTemplate.updateFirst(query, update, Movie.class);
		
	}
}
