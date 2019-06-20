package com.qa.CinemaAdminBackend.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.qa.CinemaAdminBackend.entities.Movie;

public interface MovieRepo extends MongoRepository<Movie, Long>, MovieRepoCustom {

}
