package com.qa.CinemaProject.test.repo;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import com.qa.CinemaProject.entities.Movie;
import com.qa.CinemaProject.repo.MovieRepo;
import com.qa.CinemaProject.repo.MovieRepoImpl;
@Repository
public class EmbeddedMovieRepo extends MovieRepoImpl implements MovieRepo {
	
	@Autowired
	protected MongoTemplate mongoTemplate;
	
	private Query getIdQuery(long id) {
		return new Query().addCriteria(Criteria.where("id").is(id));
	}
	
	@Override
	public List<Movie> findAll() {
		return this.mongoTemplate.findAll(Movie.class);
	}

	@Override
	public List<Movie> findAll(Sort sort) {
		return this.findAll();
	}

	@SuppressWarnings("unchecked")
	@Override
	public <S extends Movie> List<S> findAll(Example<S> example) {
		return (List<S>) this.findAll();
	}

	@SuppressWarnings("unchecked")
	@Override
	public <S extends Movie> List<S> findAll(Example<S> example, Sort sort) {
		return (List<S>) this.findAll();
	}

	@SuppressWarnings("unchecked")
	@Override
	public Page<Movie> findAll(Pageable pageable) {
		return (Page<Movie>) this.findAll();
	}

	@Override
	public Optional<Movie> findById(Long id) {
		return this.mongoTemplate
				.find(this.getIdQuery(id), Movie.class)
				.stream().findFirst();
	}

	@Override
	public boolean existsById(Long id) {
		return this.mongoTemplate.exists(getIdQuery(id), Movie.class);
	}

	@Override
	public Iterable<Movie> findAllById(Iterable<Long> ids) {
		return this.mongoTemplate.find(new Query().addCriteria(Criteria.where("id").in(ids)), Movie.class);
	}

	@Override
	public long count() {
		return this.findAll().size();
	}

	@Override
	public void deleteById(Long id) {
		this.mongoTemplate.remove(this.getIdQuery(id), Movie.class);
	}

	@Override
	public void deleteAll() {
		this.mongoTemplate.dropCollection(Movie.class);
	}

	@Override
	public <S extends Movie> List<S> saveAll(Iterable<S> entities) {
		return this.insert(entities);
	}

	@Override
	public <S extends Movie> S insert(S entity) {
		this.mongoTemplate.save(entity);
		return entity;
	}

	@Override
	public <S extends Movie> List<S> insert(Iterable<S> entities) {
		entities.forEach(entity -> this.insert(entity));
		return (List<S>) entities;
	}

	@Override
	public <S extends Movie> S save(S entity) {
		this.insert(entity);
		return entity;
	}

	@Override
	public void delete(Movie entity) {
		this.mongoTemplate.remove(entity);
	}
	
	
	@Override
	public <S extends Movie> Optional<S> findOne(Example<S> example) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <S extends Movie> Page<S> findAll(Example<S> example, Pageable pageable) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <S extends Movie> long count(Example<S> example) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public <S extends Movie> boolean exists(Example<S> example) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public void deleteAll(Iterable<? extends Movie> entities) {
		entities.forEach(entity -> this.mongoTemplate.remove(entity));
	}

}
