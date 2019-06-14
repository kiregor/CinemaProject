package com.qa.CinemaProject.test.config;

import org.mockito.Mockito;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.context.annotation.Profile;

import com.qa.CinemaProject.entities.Booking;

/**
 * This configuration asserts the BookingService's ability to hold and retrieve
 * booking details by creating mock booking details.
 * @author stephen
 *
 */
@Profile("mockBookingConfiguration")
@Configuration
public class MockBookingConfiguration {

	@Primary
	@Bean
	public Booking booking() {
		return Mockito.mock(Booking.class);
	}
}
