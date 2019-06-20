package com.qa.CinemaAdminBackend.repo;

import com.qa.CinemaAdminBackend.exception.SequenceException;

public interface SequenceRepo  {
	
	long getNextSequenceId(String key) throws SequenceException;
	
}
