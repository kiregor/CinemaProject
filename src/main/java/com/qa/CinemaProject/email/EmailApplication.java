package com.qa.CinemaProject.email;

import javax.mail.PasswordAuthentication;

import java.util.Date;
import java.util.Properties;

import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.MessagingException;

@Configuration
public class EmailApplication {
	
	@Value("${email.address}")
	public String emailAddress;
	@Value("${email.password}")
	public String emailPassword;
	@Value("${smtp.server}")
	public String smtpServer;
	@Value("${smtp.port}")
	public String smtpPort;
	
	public void sendMail(Email email) throws AddressException, MessagingException {
		Properties props = new Properties();
		props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.starttls.enable", "true");
		props.put("mail.smtp.host", smtpServer);
		props.put("mail.smtp.port", smtpPort);
		
		Session session = Session.getInstance(props,
				// Authenticator is an interface...
				new Authenticator() {
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(emailAddress, emailPassword);
			}
		});
		Message msg = new MimeMessage(session);
		// throws address exception, mail exception
		InternetAddress thisAddress = new InternetAddress(emailAddress, false);
		msg.setFrom(new InternetAddress(emailAddress, false));
		
		msg.setRecipient(Message.RecipientType.TO, thisAddress);
		// Cc QACinema and the sender
		msg.setRecipient(Message.RecipientType.CC, new InternetAddress(email.getSender()));
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
