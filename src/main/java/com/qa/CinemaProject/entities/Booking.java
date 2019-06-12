package com.qa.CinemaProject.entities;

import java.util.List;

import org.springframework.data.annotation.Id;

public class Booking {

	@Id
	private long id;
	private List<Ticket> tickets;
	private int totalPrice;

	public List<Ticket> getTickets() {
		return tickets;
	}

	public void setTickets(List<Ticket> tickets) {
		this.tickets = tickets;
	}

	public int getTotalPrice() {
		return totalPrice;
	}

	public void setTotalPrice(int totalPrice) {
		this.totalPrice = totalPrice;
	}

}
