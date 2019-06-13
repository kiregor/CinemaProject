package com.qa.CinemaProject.repo;

import com.qa.CinemaProject.exception.SequenceException;

public interface SequenceRepo  {
	
	long getNextSequenceId(String key) throws SequenceException;
	
}
