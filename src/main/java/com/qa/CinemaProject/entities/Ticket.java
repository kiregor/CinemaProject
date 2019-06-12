package com.qa.CinemaProject.entities;

import org.springframework.data.annotation.Id;

public class Ticket {

	@Id
	private long id;
	private String location;
	private String ticketType;
	private int price;

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getTicketType() {
		return ticketType;
	}

	public void setTicketType(String ticketType) {
		this.ticketType = ticketType;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

}
