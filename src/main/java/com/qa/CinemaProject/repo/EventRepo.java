package com.qa.CinemaProject.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.qa.CinemaProject.entities.MovieEvent;

public interface EventRepo extends MongoRepository<MovieEvent, Long> {

}
