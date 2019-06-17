package com.qa.CinemaProject.tests.junit;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.qa.CinemaProject.CinemaProjectApplication;
import com.qa.CinemaProject.entities.Ticket;

@ActiveProfiles("test")
@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = CinemaProjectApplication.class)
public class TicketTest {

	@Test
	public void testTicketTicketTypeField() {
		String ticketType = "Test Ticket Type";
		Ticket ticket = new Ticket();
		ticket.setTicketType(ticketType);
		assertThat(ticket.getTicketType()).isEqualTo(ticketType);
	}
	
	@Test
	public void testTicketToString() {
		String ticketType = "Test Ticket Type", location = "Test Location";
		int id = 0, price = 1;
		Ticket ticket = new Ticket();
		ticket.setPrice(price);
		ticket.setLocation(location);
		ticket.setTicketType(ticketType);
		String expected = String.format("Ticket[id=%s, location='%s', ticketType='%s', price=%s]", id, location, ticketType, price);
		assertThat(ticket.toString()).isEqualTo(expected);
	}
	
	@Test
	public void testTicketGetPriceField() {
		Ticket ticket = new Ticket();
		int price = 1;
		ticket.setPrice(price);
		assertThat(ticket.getPrice()).isEqualTo(price);
	}
}
