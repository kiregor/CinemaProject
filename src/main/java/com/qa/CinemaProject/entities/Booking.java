package com.qa.CinemaProject.entities;

import java.util.List;

import org.springframework.data.annotation.Id;

public class Booking {

	@Id
	private long id;
	private List<Ticket> tickets;
	private int totalPrice;
	
	public Booking() {}
	
	public Booking(List<Ticket> tickets, int totalPrice) {
		this.tickets = tickets;
		this.totalPrice = totalPrice;
	}
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

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

	public String toString() {
		return String.format("Booking[id=%s, totalPrice='%s', numTickets='%s']", id, totalPrice, tickets.size());
	}
}
