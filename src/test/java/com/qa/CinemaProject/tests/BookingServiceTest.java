package com.qa.CinemaProject.tests;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.assertj.core.api.Assertions;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.qa.CinemaProject.CinemaProjectApplication;
import com.qa.CinemaProject.controllers.MovieController;
import com.qa.CinemaProject.entities.Booking;
import com.qa.CinemaProject.entities.Ticket;
import com.qa.CinemaProject.repo.BookingRepo;
import com.qa.CinemaProject.service.BookingService;
import com.stripe.exception.StripeException;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = CinemaProjectApplication.class)
public class BookingServiceTest {

	@Autowired
	private BookingService bs;

	@Autowired
	private BookingRepo br;

	
	/**
	 * Test that the repository initialises as empty. 
	 */
	@Test
	public void testRepositoryStartsEmpty() {
		// Given that nothing was entered in the repository,
		// Then the repository is empty.
		assertThat(br.findAll()).isEmpty();
	}
	/**
	 * See whether the repo saves one entity which can be retrieved. (Using location to index the entry).
	 * @throws StripeException 
	 */
	@Test
	public void testRepositorySavesBookingEntity() throws StripeException {
		String location = "A-2";
		// Create a fake booking. Can't find by id as it's auto-incremented. Will search via location.
		Booking b1 = new Booking();
		Ticket t1 = new Ticket();
		t1.setLocation("A-2");
		t1.setPrice(0);
		b1.setTickets(List.of(t1));
		// Given that the database is empty...
		// When an entry with a specified location is entered...
		br.save(b1);
		// Then that entry is persisted in the database.
		Ticket t2 = br.findAll().get(0).getTickets().get(0);
		Assertions.assertThat(t2).hasFieldOrPropertyWithValue("location", location);
	}

	/**
	 * Check if several entities can be persisted.
	 */
	@Test
	public void testRepositorySavesBookingEntities() {
		// Given that the repository is empty...
		String location1 = "B-1", location2 = "B-2", location3 = "B-3";
		// When three bookings are saved...
		Stream.of(location1, location2, location3)
		.map(l -> { 
			Booking b = new Booking();
			Ticket t = new Ticket();
			t.setLocation(l);
			b.setTickets(List.of(t));
			return b;
		})
		.forEach(booking -> br.save(booking));
		// Then they should all be retrievable.
		Stream.of(location1, location2, location3).forEach(location -> {
			// Get all the bookings from the repository.
			List<Booking> allBookings = br.findAll();
			// Reduce the list of bookings to a 2-dimensional list of tickets.
			List<List<Ticket>> ticketList = allBookings.stream()
					.map( booking -> booking.getTickets())
					.collect(Collectors.toList());
			// Get the only ticket and check if it's location matches the query.
			Ticket t = ticketList.stream().map(tl -> tl.get(0)).collect(Collectors.toList()).get(0);
			assertThat(t).hasFieldOrPropertyWithValue("location", location);
		});
	}

}
