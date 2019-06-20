package com.qa.CinemaAdminBackend.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.qa.CinemaAdminBackend.entities.MovieEvent;

public interface EventRepo extends MongoRepository<MovieEvent, Long> {

}
