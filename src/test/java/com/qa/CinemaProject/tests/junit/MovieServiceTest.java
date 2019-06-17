package com.qa.CinemaProject.tests.junit;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.stream.IntStream;

import org.junit.After;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.qa.CinemaProject.CinemaProjectApplication;
import com.qa.CinemaProject.entities.Movie;
import com.qa.CinemaProject.entities.Popular;
import com.qa.CinemaProject.tests.junit.services.EmbeddedMovieService;

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
				.findAny().map(m -> m.getId()).orElseThrow();
		Movie m  = ems.getMovie(movieId);
		assertThat(m).hasFieldOrPropertyWithValue("movieName", movieName);
		assertThat(m).hasFieldOrPropertyWithValue("imdbId", imdb1);
		m.setMovieName(otherName);
		m.setimdbId(imdb2);
		ems.updateMovie(m);
		assertThat(ems.getMovie(movieId)).hasFieldOrPropertyWithValue("movieName", otherName);
		assertThat(ems.getMovie(movieId)).hasFieldOrPropertyWithValue("imdbId", imdb2);
	}
	
	@Test
	public void testServiceReturnsNewMovieIfNotExist() {
		// There's nothing in the repo
		assertThat(ems.getMovie(1)).isNotNull();
	}
	
	@Test
	public void testServicesIncrementId() {
		String movieName = "Test Movie";
		Movie previousMovie = new Movie();
		previousMovie.setMovieName("Some Movie");
		ems.createMovie(previousMovie);
		long id = ems.getAllEntities().stream()
				.findFirst().map(movie -> movie.getId()).orElseThrow();
		Movie nextMovie = new Movie();
		nextMovie.setMovieName(movieName);
		ems.createMovie(nextMovie);
		System.out.println(nextMovie.getMovieName());
		System.out.println(ems.getAllMovies().size());
		nextMovie = ems.getAllMovies().stream()
		.filter(movie -> movie.getMovieName().equals(movieName))
		.findAny().orElseThrow();
		assertThat(nextMovie.getId()).isEqualTo(id + 1);
	}
	
	@Test
	public void testServiceDeletesMovie() {
		String movieName = "Men in Black";
		Movie movie = new Movie();
		movie.setMovieName(movieName);
		ems.createMovie(movie);
		assertThat(ems.getAllMovies()).isNotEmpty();
		long id = ems.getAllMovies().stream()
		.filter(m -> m.getMovieName().equals(movieName)).findFirst()
		.map(m -> m.getId()).orElseThrow();
		ems.deleteMovie(id);
		assertThat(ems.getAllMovies()).isEmpty();
	}
	
	@Test
	public void testServiceGetsPopularMovies() {
		String[] imdb = {"alpha", "beta", "gamma"};
		String[] movies = {"Star Wars", "Lord of the Rings", "Hunger Games",
				"Slumdog Millionaire", "Charlie's Angels"};
		IntStream.range(0, movies.length).forEach(i -> {
				Movie movie = new Movie();
				if(i < imdb.length) {
					movie.setimdbId(imdb[i]);
				} else {
					movie.setimdbId("Some imdbId");
				}
				movie.setMovieName(movies[i]);
				ems.createMovie(movie);
		});
		Popular popular = ems.getPopular(movies[1], movies[2], "Charlie's Angels");
		assertThat(popular.getMovieOne()).isEqualTo(imdb[1]);
		assertThat(popular.getMovieTwo()).isEqualTo(imdb[2]);
		assertThat(popular.getMovieThree()).isEqualTo("Some imdbId");
	}
	
}
