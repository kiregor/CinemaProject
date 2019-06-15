package com.qa.CinemaProject.test;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.After;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.qa.CinemaProject.CinemaProjectApplication;
import com.qa.CinemaProject.entities.Movie;
import com.qa.CinemaProject.test.services.EmbeddedMovieService;

@ActiveProfiles("test")
@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = CinemaProjectApplication.class)
public class MovieServiceTest {
	
	@Autowired
	private EmbeddedMovieService ems;
	
	@After
	public void finalize() {
		ems.clear();
	}
	
	@Test
	public void testRepositoryStartsEmpty() {
		assertThat(ems.getAllEntities()).isEmpty();
	}
	
	@Test
	public void testRepositorySavesMovieEntity() {
		Movie mov = new Movie();
		String movieName = "Bourne Identity";
		mov.setMovieName(movieName);
		ems.createMovie(mov);
		assertThat(ems.getAllMovies().stream().filter(movie -> movie.getMovieName().equals(movieName))).isNotEmpty();
	}
	
	@Test
	public void testServiceUpdatesEntity() throws Exception {
		Movie movie = new Movie();
		String movieName = "Trainspotting", otherName = "Schindler's List", imdb1 = "luke", imdb2 = "skywalker";
		movie.setMovieName(movieName);
		movie.setimdbId(imdb1);
		ems.createMovie(movie);
		// Get the movie's id. Throw an exception/fail assertion otherwise.
		long movieId = ems.getAllMovies().stream()
				.filter(mov -> mov.getMovieName().equals(movieName))
				.findAny().map(m -> m.getId()).orElseThrow(() -> {
					Assert.assertTrue(false);
					return new Exception();
				});
		Movie m  = ems.findEntity(movieId).get();
		assertThat(m).hasFieldOrPropertyWithValue("movieName", movieName);
		assertThat(m).hasFieldOrPropertyWithValue("imdbId", imdb1);
		m.setMovieName(otherName);
		m.setimdbId(imdb2);
		ems.updateMovie(m);
		assertThat(ems.findEntity(movieId).get()).hasFieldOrPropertyWithValue("movieName", otherName);
		assertThat(ems.findEntity(movieId).get()).hasFieldOrPropertyWithValue("imdbId", imdb2);
	}
}
