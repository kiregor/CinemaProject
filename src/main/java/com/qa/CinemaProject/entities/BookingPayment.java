package com.qa.CinemaProject.entities;

public class BookingPayment {
		private Booking booking;
		private String token;
		private String holdToken;
		private String eventToken;
		private String userId;
		
		
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

		public String getUserId() {
			return userId;
		}

		public void setUserId(String userId) {
			this.userId = userId;
		}

		public void setEventToken(String eventToken) {
			this.eventToken = eventToken;
		}

		@Override
		public String toString() {
			return "BookingPayment [booking=" + booking + ", token=" + token + ", holdToken=" + holdToken
					+ ", eventToken=" + eventToken + ", userId=" + userId + "]";
		}
		
}
