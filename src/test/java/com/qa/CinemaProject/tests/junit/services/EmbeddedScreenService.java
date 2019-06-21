package com.qa.CinemaProject.tests.junit.services;

import java.util.List;

import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Service;

import com.qa.CinemaProject.entities.Screen;
import com.qa.CinemaProject.repo.SequenceRepo;
import com.qa.CinemaProject.service.ScreenService;
import com.qa.CinemaProject.tests.junit.repositories.EmbeddedScreenRepo;

@Profile("test")
@Service
public class EmbeddedScreenService extends ScreenService implements EmbeddedService<Screen> {

	public EmbeddedScreenService(EmbeddedScreenRepo screenRepo, SequenceRepo sequenceRepo) {
		super(screenRepo, sequenceRepo);
		// TODO Auto-generated constructor stub
	}

	@Override
	public void clear() {
		// TODO Auto-generated method stub
		screenRepo.deleteAll();
	}

	@Override
	public void delete(Screen entity) {
		// TODO Auto-generated method stub
		screenRepo.delete(entity);
	}

	@Override
	public List<Screen> getAllEntities() {
		// TODO Auto-generated method stub
		return screenRepo.findAll();
	}

}
