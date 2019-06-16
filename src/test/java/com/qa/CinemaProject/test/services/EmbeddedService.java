package com.qa.CinemaProject.test.services;

import java.util.List;

public interface EmbeddedService <T> {

	void clear();
	void delete(T entity);
	List<T> getAllEntities();
}
