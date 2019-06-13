package com.qa.CinemaProject.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.qa.CinemaProject.entities.Screen;

public interface ScreenRepo extends MongoRepository<Screen, Long>{

}
