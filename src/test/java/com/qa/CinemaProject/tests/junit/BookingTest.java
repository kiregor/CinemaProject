package com.qa.CinemaProject.tests.junit;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

import com.qa.CinemaProject.CinemaProjectApplication;
import com.qa.CinemaProject.entities.Booking;
import com.qa.CinemaProject.entities.Ticket;

@RunWith(SpringRunner.class)
@ActiveProfiles("test")
@SpringBootTest(classes = CinemaProjectApplication.class)
public class BookingTest {
	
	@Test
	public void testBookingToString() {
		Booking booking = new Booking();
		Ticket t1 = new Ticket(), t2 = new Ticket();
		int ticket1Price = 5, ticket2Price = 7, bookingId = 0, 
				expectedTotalPrice = ticket1Price + ticket2Price, expectedNumberOfTickets;
		t1.setPrice(ticket1Price); 
		t2.setPrice(ticket2Price);
		List<Ticket> tickets = List.of(t1, t2);
		expectedNumberOfTickets = tickets.size();
		booking.setId(bookingId);
		booking.setTickets(tickets);
		// The totalPrice field has to be set manually, instead of adding up the ticket prices internally.
		booking.setTotalPrice(expectedTotalPrice);
		String expected = String.format("Booking[id=%s, totalPrice='%s', numTickets='%s']",
				bookingId, expectedTotalPrice, expectedNumberOfTickets);
		assertThat(booking.toString()).isEqualTo(expected);
	}
}
