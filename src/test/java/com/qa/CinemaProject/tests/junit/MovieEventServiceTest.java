//package com.qa.CinemaProject.tests.junit;
//
//import static org.assertj.core.api.Assertions.assertThat;
//
//import java.util.List;
//import java.util.stream.Stream;
//
//import org.assertj.core.api.Assertions;
//import org.junit.After;
//import org.junit.Assert;
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.test.context.ActiveProfiles;
//import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
//
//import com.qa.CinemaProject.CinemaProjectApplication;
//import com.qa.CinemaProject.entities.MovieEvent;
//import com.qa.CinemaProject.tests.junit.services.EmbeddedMovieEventService;
//
//@ActiveProfiles("test")
//@RunWith(SpringJUnit4ClassRunner.class)
//@SpringBootTest(classes = CinemaProjectApplication.class)
//public class MovieEventServiceTest {
//	
//	@Autowired
//	EmbeddedMovieEventService emes;
//	
//	@After
//	public void finalize() {
//		emes.clear();
//	}
//	
//	@Test
//	public void testRepositoryStartsEmpty() {
//		assertThat(emes.getAllEvents()).isEmpty();
//	}
//
//	@Test
//	public void testRepositorySavesMovieEventEntity() {
//		String si = "someScreenId";
//		MovieEvent m1 = new MovieEvent();
//		m1.setScreenId(si);
//		emes.createEvent(m1);
//		MovieEvent m2 = emes.getAllEntities().get(0);
//		Assertions.assertThat(emes.retrieveEvent(m2.getId())).hasFieldOrPropertyWithValue("screenId", si);
//	}
//
//	/**
//	 * Check if several entities can be persisted.
//	 */
//	@Test
//	public void testRepositorySavesBookingEntities() {
//		// Given that the repository is empty...);
//		String screenId1 = "screenId1", screenId2 = "screenId2", screenId3 = "screenId3";
//		String[] screens = { screenId1, screenId2, screenId3 };
//		// When three bookings are saved...
//		Stream.of(screens).map(si -> {
//			MovieEvent m = new MovieEvent();
//			m.setScreenId(si);
//			return m;
//		}).forEach(m -> emes.createEvent(m));
//		// Then they should all be retrievable.
//		List<MovieEvent> movieEvents = emes.getAllEntities();
//		Stream.of(screens).forEach(screen -> {
//			movieEvents.stream()
//					.filter(me -> me.getScreenId().equals(screen))
//					.findFirst()
//					.ifPresentOrElse((a) -> Assert.assertTrue(true),
//							() -> Assertions.fail(String.format("A screen with the screenId %s is not present%n")));
//
//		});
//	}
//	
//	@Test
//	public void testServiceReturnsNewMovieEventIfNotExist() {
//		assertThat(emes.retrieveEvent(0)).isNotNull();
//	}
//
//}
