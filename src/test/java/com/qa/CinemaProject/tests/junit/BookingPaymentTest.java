package com.qa.CinemaProject.tests.junit;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.qa.CinemaProject.CinemaProjectApplication;
import com.qa.CinemaProject.entities.Booking;
import com.qa.CinemaProject.entities.BookingPayment;

@ActiveProfiles("test")
@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = CinemaProjectApplication.class)
public class BookingPaymentTest {
	
	@Test
	public void testBookingPaymentBookingField() {
		BookingPayment bookingPayment = new BookingPayment();
		Booking booking = new Booking();
		bookingPayment.setBooking(booking);
		assertThat(bookingPayment.getBooking()).isSameAs(booking);
	}
	
	@Test
	public void testBookingPaymentTokenField() {
		String testToken = "Test Token";
		BookingPayment bookingPayment = new BookingPayment();
		bookingPayment.setToken(testToken);
		assertThat(bookingPayment.getToken()).isSameAs(testToken);
	}
	
	@Test
	public void testBookingPaymentHoldTokenField() {
		String testHoldToken = "Test Hold Token";
		BookingPayment bookingPayment = new BookingPayment();
		bookingPayment.setHoldToken(testHoldToken);
		assertThat(bookingPayment.getHoldToken()).isSameAs(testHoldToken);
	}

}
