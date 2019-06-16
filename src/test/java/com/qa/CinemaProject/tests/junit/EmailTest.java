package com.qa.CinemaProject.tests.junit;

import static org.assertj.core.api.Assertions.assertThat;

import javax.mail.MessagingException;
import javax.mail.internet.AddressException;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.qa.CinemaProject.CinemaProjectApplication;
import com.qa.CinemaProject.email.Email;
import com.qa.CinemaProject.email.EmailApplication;

@ActiveProfiles("test")
@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = CinemaProjectApplication.class)
public class EmailTest {
	
	@Autowired
	EmailApplication emailApplication;
	
	@Test
	public void testEmailToString() {
		String sender = "Test Sender", message = "Test Message", queryNo = "QueryNo";
		Email email = new Email();
		email.setMessage(message);
		email.setQueryNo(queryNo);
		email.setSender(sender);
		String expected = String.format("Email [ sender = %s, message = %s, queryNo = %s ]", sender, message, queryNo);
		assertThat(email.toString()).isEqualTo(expected);
	}
	
	@Test
	public void testEmailConstructor() {
		String sender = "Test Sender", message = "Test Message", queryNo = "QueryNo";
		Email email = new Email(sender, message, queryNo);
		assertThat(email.getSender()).isEqualTo(sender);
		assertThat(email.getMessage()).isEqualTo(message);
		assertThat(email.getQueryNo()).isEqualTo(queryNo);
	}
	
	@Test(expected = MessagingException.class)
	public void testEmailThrowsExceptionOnBadAddress() throws MessagingException {
		Email email = new Email("Bad sender", "Some message", "0");
		emailApplication.sendMail(email);
		assertThat(false).isTrue();
	}
}
