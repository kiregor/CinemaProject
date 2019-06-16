package com.qa.CinemaProject.test.repo;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.CrudRepository;

public abstract class EmbeddedRepo <T> implements CrudRepository<T, Long>, MongoRepository<T, Long> {
	@Autowired
	protected MongoTemplate mongoTemplate;
	
	public EmbeddedRepo(Class<T> cl) {
		this.cless = cl;
	}
	
	private Class<T> cless;
	
	private Query getIdQuery(long id, Class<T> cless) {
		return new Query().addCriteria(Criteria.where("id").is(id));
	}

	@Override
	public <S extends T> List<S> saveAll(Iterable<S> entities) {
		entities.forEach(entity -> mongoTemplate.save(entity));
		return (List<S>) entities;
	}

	@Override
	public <S extends T> List<S> findAll(Example<S> example) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public <S extends T> List<S> insert(Iterable<S> entities) {
		this.saveAll(entities);
		return (List <S>) entities;
	}
	
	@Override
	public <S extends T> S insert(S entity) {
		mongoTemplate.save(entity);
		return entity;
	}

	@Override
	public List<T> findAll() {
		return mongoTemplate.findAll(cless);
	}
	
	@Override
	public List<T> findAll(Sort sort) {
		return this.findAll();
	}
	
	@SuppressWarnings("unchecked")
	@Override
	public <S extends T> List<S> findAll(Example<S> example, Sort sort) {
		return (List<S>) this.findAll();
	}


	
	public <S extends T> List<S> findAll(Example<S> example, Class<S> cless) {
		// TODO Auto-generated method stub
		return mongoTemplate.findAll(cless);
	}

	
	public <S extends T> List<S> findAll(Example<S> example, Sort sort, Class<S> cless) {
		// TODO Auto-generated method stub
		return mongoTemplate.findAll(cless);
	}

	@Override
	public Page<T> findAll(Pageable pageable) {
		return new PageImpl<T>((List<T>) this.findAll());
	}

	
	public <S extends T> S save(S entity) {
		this.mongoTemplate.save(entity);
		return entity;
	}

	@Override
	public Optional<T> findById(Long id) {
		return Optional.of((T) this.mongoTemplate.findById(id, this.cless));
	}

	@Override
	public boolean existsById(Long id) {
		// TODO Auto-generated method stub
		return this.mongoTemplate.exists(this.getIdQuery(id, cless), cless);
	}
	
	@Override
	public Iterable<T> findAllById(Iterable<Long> ids) {
		return this.mongoTemplate.find(new Query().addCriteria(Criteria.where("id").in(ids)), cless);
	}

	@Override
	public long count() {
		return ((List<T>) this.findAll()).size();
	}

	@Override
	public void deleteById(Long id) {
		this.mongoTemplate.findAndRemove(this.getIdQuery(id, cless), cless);
	}

	@Override
	public void delete(T entity) {
		this.mongoTemplate.remove(entity);
	}

	
	@Override
	public void deleteAll(Iterable<? extends T> entities) {
		entities.forEach(entity -> this.mongoTemplate.remove(entity));
		
	}

	@Override
	public void deleteAll() {
		this.mongoTemplate.dropCollection(cless);
	}

	
	public <S extends T> Optional<S> findOne(Example<S> example) {
		return null;
	}

	
	public <S extends T> long count(Example<S> example) {
		// TODO Auto-generated method stub
		return 0;
	}

	
	public <S extends T> boolean exists(Example<S> example) {
		// TODO Auto-generated method stub
		return false;
	}
	
	@Override
	public <S extends T> Page<S> findAll(Example<S> example, Pageable pageable) {
		// TODO Auto-generated method stub
		return null;
	}

}
