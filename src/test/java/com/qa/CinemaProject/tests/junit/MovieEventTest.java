package com.qa.CinemaProject.tests.junit;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.qa.CinemaProject.CinemaProjectApplication;
import com.qa.CinemaProject.entities.MovieEvent;

@ActiveProfiles("test")
@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = CinemaProjectApplication.class)
public class MovieEventTest {
	
	@Test
	public void testMovieEventToString() {
		String expected, screenId = "Test Screen Id";
		long id = 0, movieId = 2;
		expected = "Event [id=" + id + ", movieId=" + movieId + ", screenId=" + screenId + "]";
		MovieEvent movieEvent = new MovieEvent(movieId, screenId, "seatsIOApi");
		assertThat(movieEvent.toString()).isEqualTo(expected);
	}
	
	@Test
	public void testMovieEventMovieIdField() {
		long expected = 2;
		MovieEvent movieEvent = new MovieEvent();
		movieEvent.setMovieId(expected);
		assertThat(movieEvent.getMovieId()).isEqualTo(expected);
	}
	
	@Test
	public void testMovieEventSeatsIOKeyField() {
		String expected = "Test Seats IO Key";
		MovieEvent movieEvent = new MovieEvent();
		movieEvent.setSeatsIOKey(expected);
		assertThat(movieEvent.getSeatsIOKey()).isEqualTo(expected);

	}
}
