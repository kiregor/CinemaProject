package com.qa.CinemaProject.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.qa.CinemaProject.entities.Screen;
import com.qa.CinemaProject.repo.ScreenRepo;
import com.qa.CinemaProject.repo.SequenceRepo;

@Service
public class ScreenService {

	protected ScreenRepo screenRepo;
	protected SequenceRepo sequenceRepo;

	public ScreenService(ScreenRepo screenRepo, SequenceRepo sequenceRepo) {
		this.screenRepo = screenRepo;
		this.sequenceRepo = sequenceRepo;
	}

	public void createScreen(Screen screen) {
		screen.setId(sequenceRepo.getNextSequenceId("screen"));
		screenRepo.save(screen);
	}
	
	public void saveScreen(Screen screen) {
		screenRepo.save(screen);
	}

	public Screen retrieveScreen(long id) {
		if (this.screenRepo.existsById(id)) {
			return this.screenRepo.findById(id).get();
		} else {
			return new Screen();
		}
	}
	
	public List<Screen> getAllScreens(){
		return screenRepo.findAll();
	}
}
