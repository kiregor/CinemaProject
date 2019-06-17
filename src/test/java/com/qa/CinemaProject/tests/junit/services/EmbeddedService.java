package com.qa.CinemaProject.tests.junit.services;

import java.util.List;

/* Helper functions */
public interface EmbeddedService <T> {

	void clear();
	void delete(T entity);
	List<T> getAllEntities();
}
