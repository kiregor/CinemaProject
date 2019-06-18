package com.qa.CinemaProject.tests.junit;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.IntStream;
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
import com.qa.CinemaProject.tests.junit.services.EmbeddedBookingService;
import com.stripe.exception.StripeException;

@ActiveProfiles("test")
@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = CinemaProjectApplication.class)
public class BookingServiceTest {

	@Autowired
	private EmbeddedBookingService ebs;

	private final String DUMMY_HOLD_TOKEN = "token";

	private Optional<Booking> getBookingByTotalPrice(int totalPrice) {
		return ebs.getAllBookings().stream().filter(b -> b.getTotalPrice() == totalPrice).findFirst();
	}

	@After
	public void finalize() {
		// Ensure the repository is clear before and after every test.
		ebs.clear();
	}

	@Test
	public void testRepositoryStartsEmpty() {
		// Given that nothing was entered in the repository,
		// Then the repository is empty.
		assertThat(ebs.getAllBookings()).isEmpty();
	}

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
		ebs.saveBooking(b1, DUMMY_HOLD_TOKEN, "");
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
		}).forEach(booking -> ebs.saveBooking(booking, DUMMY_HOLD_TOKEN, "eventToken"));
		// Then they should all be retrievable.
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

	@Test
	public void testRepositoryRemovesBookingEntities() {
		String location = "A-1";
		int totalPrice = 3;
		Booking b = new Booking();
		Ticket t = new Ticket();
		t.setLocation(location);
		b.setTickets(List.of(t));
		b.setTotalPrice(totalPrice);
		ebs.saveBooking(b, DUMMY_HOLD_TOKEN, "eventToken");
		Optional<Booking> b1 = this.getBookingByTotalPrice(totalPrice);
		Assertions.assertThat(b1).isNotEmpty();
		ebs.delete(b1.get());
		Optional<Booking> b2 = this.getBookingByTotalPrice(totalPrice);
		Assertions.assertThat(b2).isEmpty();
	}

	@Test
	public void testServiceRetrieveBooking() {
		int[] totalPrices = { 1, 3000, 245 };
		IntStream.range(0, 3).forEach(i -> {
			Booking booking = new Booking(List.of(), totalPrices[i]);
			ebs.saveBooking(booking, "holdToken", "eventToken");
		});
		Arrays.stream(totalPrices).forEach(price -> getBookingByTotalPrice(price).ifPresent(booking -> {
			assertThat(ebs.retrieveBooking(booking.getId())).isEqualToComparingFieldByField(booking);
		}));
	}

	@Test
	public void testServiceReturnsNewBookingIfNotExist() {
		assertThat(ebs.retrieveBooking(0)).isNotNull();
	}
	
	
}
