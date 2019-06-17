package com.qa.CinemaProject.tests.junit;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.qa.CinemaProject.CinemaProjectApplication;
import com.qa.CinemaProject.entities.Movie;

@ActiveProfiles("test")
@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = CinemaProjectApplication.class)
public class MovieTest {

	@Test
	public void testMovieConstructor() {
		String movieName = "Test Movie Name", imdbId = "Test ImdbId";
		Movie movie = new Movie(movieName, imdbId);
		assertThat(movie.getimdbId()).isSameAs(imdbId);
		assertThat(movie.getMovieName()).isSameAs(movieName);
	}
	
	@Test
	public void testMovieToString() {
		String movieName = "Test Movie Name", imdbId = "Test ImdbId", expected;
		int id = 3;
		Movie movie = new Movie(movieName, imdbId);
		movie.setId(id);
		expected = String.format("Movie[id=%s, movieName='%s', imdbId='%s']",
				id, movieName, imdbId);
		assertThat(movie.toString()).isEqualTo(expected);
	}
}
