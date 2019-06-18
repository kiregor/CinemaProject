package com.qa.CinemaProject.constants;

public interface MappingConstants {
	public static final String CREATE_MOVIE="/createMovie",
			GET_ALL_MOVIES="/getAllMovies",
			GET_MOVIE_ID="/getMovie/{id}",
			UPDATE_MOVIE="updateMovie",
			DELETE_MOVIE="/deleteMovie/{id}",
			PRICE_LIST="/priceList",
			SEND_EMAIL="/sendemail",
			PAYMENT="/payment",
			BOOKING="/booking",
			GET_ALL_BOOKINGS="/getAllBookins",
			CREATE_SINGLE_BOOKING="/createBooking",
			GET_POPULAR="/getPopular",
			GET_SUCCESS_STATUS="/status",
			EMBEDDED_MONGODB_HOST= "localhost",
			EMBEDDED_MONGODB_DATABASE = "embedded_db",
			SEQUENCE_COLLECTION = "sequence",
			MOVIE_COLLECTION = "movie",
			SCREEN_COLLECTION = "screen",
			EVENT_COLLECTION = "event",
			BOOKING_COLLECTION = "booking";
}
