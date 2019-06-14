package com.qa.CinemaProject.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.stripe.exception.StripeException;

import stripe.ChargePayment;

@Service
public class PaymentService {

	private ChargePayment payment;

	@Value("${stripeKey}")
	private String key;
	
	public PaymentService() {
		payment = new ChargePayment();
	}
	
	public void makePayment(String token,int cost) throws StripeException {
		this.payment.makePayment(token,key,cost);
	}
	
	public String getStatus() {
		return payment.getStatus();
	}
	
}
