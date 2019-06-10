package com.qa.CinemaProject.email;

import javax.mail.PasswordAuthentication;

import java.util.Date;
import java.util.Properties;

import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.core.env.Environment;

import com.qa.CinemaProject.constants.Constants;

import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.MessagingException;

@Configuration
public class EmailApplication {
	
	public void sendMail(Email email) throws AddressException, MessagingException {
		Properties props = new Properties();
		props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.starttls.enable", "true");
		props.put("mail.smtp.host", "smtp.gmail.com");
		props.put("mail.smtp.port", "587");
		
		Session session = Session.getInstance(props,
				// Authenticator is an interface...
				new Authenticator() {
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(Constants.EMAIL_ADDRESS, Constants.EMAIL_PASSWORD);
			}
		});
		Message msg = new MimeMessage(session);
		// throws address exception, mail exception
		InternetAddress thisAddress = new InternetAddress(Constants.EMAIL_ADDRESS, false);
		msg.setFrom(new InternetAddress(Constants.EMAIL_ADDRESS, false));
		
		msg.setRecipient(Message.RecipientType.TO, thisAddress);
		// Cc QACinema and the sender
		msg.setRecipients(Message.RecipientType.CC, new InternetAddress[]{ thisAddress, new InternetAddress(email.getSender()) });
		msg.setSubject("QA Cinema Contact Us: query" + email.getQueryNo());
		msg.setContent(email.getMessage(), "text/html");
		msg.setSentDate(new Date());
		
		Transport.send(msg);
	}
	
	@Bean
	@Primary
	public EmailApplication emailBean() {
		return new EmailApplication();
	}

}
