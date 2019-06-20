package com.qa.CinemaAdminBackend.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.qa.CinemaAdminBackend.entities.Screen;

public interface ScreenRepo extends MongoRepository<Screen, Long>{

}
