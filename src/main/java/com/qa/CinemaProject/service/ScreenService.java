package com.qa.CinemaProject.service;

import java.util.List;

import com.qa.CinemaProject.entities.Screen;
import com.qa.CinemaProject.repo.ScreenRepo;
import com.qa.CinemaProject.repo.SequenceRepo;

public class ScreenService {

	private ScreenRepo screenRepo;
	private SequenceRepo sequenceRepo;

	public ScreenService(ScreenRepo screenRepo, SequenceRepo sequenceRepo) {
		this.screenRepo = screenRepo;
		this.sequenceRepo = sequenceRepo;
	}

	public void saveScreen(Screen screen) {
		screen.setId(sequenceRepo.getNextSequenceId("screen"));
		screenRepo.save(screen);
	}

	public Screen retirieveScreen(long id) {
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
