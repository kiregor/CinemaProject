package com.qa.CinemaProject.test;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.List;
import java.util.Optional;
import java.util.stream.Stream;

import org.assertj.core.api.Assertions;
import org.junit.After;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.qa.CinemaProject.CinemaProjectApplication;
import com.qa.CinemaProject.entities.Booking;
import com.qa.CinemaProject.entities.Ticket;
import com.qa.CinemaProject.test.services.EmbeddedBookingService;
import com.stripe.exception.StripeException;

@ActiveProfiles("test")
@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = CinemaProjectApplication.class)
public class BookingServiceTest {

	@Autowired
	private EmbeddedBookingService ebs;
	
	@After
	public void finalize() {
		// Ensure the repository is clear before and after every test.
		ebs.clear();
	}
	
	/**
	 * Test that the repository initialises as empty.
	 */
	@Test
	public void testRepositoryStartsEmpty() {
		// Given that nothing was entered in the repository,
		// Then the repository is empty.
		assertThat(ebs.getAllBookings()).isEmpty();
	}

	/**
	 * See whether the repo saves one entity which can be retrieved. (Using location
	 * to locate the entry).
	 * 
	 * @throws StripeException
	 */
	@Test
	public void testRepositorySavesBookingEntity() throws StripeException {
		String location = "A-2";
		// Create a fake booking. Can't find by id as it's auto-incremented. Will search
		// via location.
		Booking b1 = new Booking();
		Ticket t1 = new Ticket();
		t1.setLocation(location);
		t1.setPrice(0);
		b1.setTickets(List.of(t1));
		// Given that the database is empty...
		// When an entry with a specified location is entered...
		ebs.saveBooking(b1);
		// Then that entry is persisted in the database.
		Ticket t2 = ebs.getAllBookings().get(0).getTickets().get(0);
		Assertions.assertThat(t2).hasFieldOrPropertyWithValue("location", location);
	}

	/**
	 * Check if several entities can be persisted.
	 */
	@Test
	public void testRepositorySavesBookingEntities() {
		// Given that the repository is empty...);
		String location1 = "B-1", location2 = "B-2", location3 = "B-3";
		// When three bookings are saved...
		Stream.of(location1, location2, location3).map(l -> {
			Booking b = new Booking();
			Ticket t = new Ticket();
			t.setLocation(l);
			b.setTickets(List.of(t));
			return b;
		}).forEach(booking -> ebs.saveBooking(booking));
		// Then they should all be retrievable.
		String[] locations = { location1, location2, location3 };
		List<Booking> bookings = ebs.getAllBookings();
		Stream.of(location1, location2, location3).forEach(location -> {
			bookings.stream()
					.filter(booking -> booking.getTickets().stream()
							.anyMatch(ticket -> ticket.getLocation().equals(location)))
					.findFirst().map(booking -> (Ticket) booking.getTickets().get(0)).ifPresentOrElse(
							ticket -> Assertions.assertThat(ticket).hasFieldOrPropertyWithValue("location", location),
							() -> Assertions.fail(String.format("A ticket with the location %s is not present%n")));

		});
	}
	
	// Can't test this as it is currently not implemented in the main program
	// @Test
	public void testRepositoryRemovesBookingEntities() {
		String location = "A-1";
		int totalPrice = 3;
		Booking b = new Booking();
		Ticket t = new Ticket();
		t.setLocation("A-1");
		b.setTickets(List.of(t));
		b.setTotalPrice(3);
		ebs.saveBooking(b);
		Optional<Booking> b2 = ebs.findEntityByField("totalPrice", totalPrice);
		Assertions.assertThat(b2).isNotEmpty();
		ebs.deleteEntity(b2.get());
		b2 = ebs.findEntityByField("totalPrice", totalPrice);
		Assertions.assertThat(b2).isEmpty();
	}
}
