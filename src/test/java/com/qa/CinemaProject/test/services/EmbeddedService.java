package com.qa.CinemaProject.test.services;

import static com.qa.CinemaProject.constants.MappingConstants.BOOKING_COLLECTION;

import static com.qa.CinemaProject.constants.MappingConstants.MOVIE_COLLECTION;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;

import com.qa.CinemaProject.entities.Movie;
import com.qa.CinemaProject.repo.SequenceRepo;
/**
 * A test abstraction of a Service in com.qa.CinemaProject.service, using an embedded MongoDB instance.
 * Is identical to com.qa.CinemaProject.service.BookingService but replaces the
 * actual MongoDB instance. This class uses the Sequence Repository for incrementing the
 * id field, like the actual BookingService.
 * @author Admin
 *
 */
public abstract class EmbeddedService <T> {
	
	@Autowired
	protected MongoTemplate mongoTemplate;
	
	@Autowired
	protected SequenceRepo sequenceRepo;
	
	private String collectionName;
	private Class<T> cless;
	
	public EmbeddedService(String collectionName, Class<T> cless) {
		this.collectionName = collectionName;
		this.cless = cless;
	}
	
	public void persistEntity(T entity) {
		this.mongoTemplate.save(entity);
	}
	
	public Optional<T> findEntity(long id) {
		Query q = new Query();
		q.addCriteria(Criteria.where("id").is(id));
		if (this.mongoTemplate.exists(q, cless)) {
			return Optional.of(this.mongoTemplate.find(q, cless).get(0));
		} else {
			return Optional.empty();
		}
	}
	
	public List<T> getAllEntities() {
		return mongoTemplate.findAll(cless);
	}
	
	public void deleteEntity(T entity) {
		mongoTemplate.remove(entity);
	}
	
	public void deleteEntityById(long id) {
		this.findEntity(id).ifPresent(entity -> this.deleteEntity(entity));
	}
	
	/**
	 * Utility function that ensures the repository is empty between tests.
	 */
	public void clear() {
		mongoTemplate.dropCollection(collectionName);
	}
}
