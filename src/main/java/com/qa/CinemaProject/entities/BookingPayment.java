package com.qa.CinemaProject.entities;

import java.util.List;

import org.json.JSONObject;
import org.springframework.data.annotation.Id;

public class BookingPayment {
		private Booking booking;
		private String token;
		
		
		public BookingPayment(){}
		
		public Booking getBooking() {
			return booking;
		}
		
		public String getToken() {
			return token;
		}
		
}
