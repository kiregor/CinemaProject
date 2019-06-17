package com.qa.CinemaProject.entities;

public class BookingPayment {
		private Booking booking;
		private String token;
		private String holdToken;
		private String eventToken;
		
		
		public BookingPayment(){}
		
		public Booking getBooking() {
			return booking;
		}
		
		public void setBooking(Booking b) {
			this.booking = b;
		}
		
		public String getToken() {
			return token;
		}
		
		public void setToken(String str) {
			this.token = str;
		}
		
		public String getHoldToken() {
			return holdToken;
		}
		
		public String getEventToken() {
			return eventToken;
		}
		
		public void setHoldToken(String holdToken) {
			this.holdToken = holdToken;
		}
		
}
