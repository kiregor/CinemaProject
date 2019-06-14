package com.qa.CinemaProject.entities;

import java.util.List;

import org.json.JSONObject;
import org.springframework.data.annotation.Id;

public class BookingPayment {
		private Booking booking;
		private String token;
		private String holdToken;
		
		
		public BookingPayment(){}
		
		public Booking getBooking() {
			return booking;
		}
		
		public String getToken() {
			return token;
		}
		public String getHoldToken() {
			return holdToken;
		}
		
		public void setHoldToken(String holdToken) {
			this.holdToken = holdToken;
		}
		
}
