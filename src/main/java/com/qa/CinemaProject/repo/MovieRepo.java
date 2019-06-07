package com.qa.CinemaProject.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.qa.CinemaProject.entities.Movie;

public interface MovieRepo extends MongoRepository<Movie, Long>, MovieRepoCustom {

}
