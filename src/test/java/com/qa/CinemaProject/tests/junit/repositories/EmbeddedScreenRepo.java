package com.qa.CinemaProject.tests.junit.repositories;

import org.springframework.stereotype.Repository;

import com.qa.CinemaProject.entities.Screen;
import com.qa.CinemaProject.repo.ScreenRepo;

@Repository
public class EmbeddedScreenRepo extends EmbeddedRepo<Screen> implements ScreenRepo {

	public EmbeddedScreenRepo() {
		super(Screen.class);
	}
	
	
}
