package com.qa.CinemaProject.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.qa.CinemaProject.entities.Booking;

public interface BookingRepo extends MongoRepository<Booking, Long>{

}
