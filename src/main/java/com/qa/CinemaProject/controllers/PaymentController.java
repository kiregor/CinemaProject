package com.qa.CinemaProject.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.qa.CinemaProject.service.MovieService;
import com.qa.CinemaProject.service.PaymentService;

@RequestMapping
@RestController
@CrossOrigin(origins = "http://localhost:3000") 
public class PaymentController {
	
	private PaymentService paymentService;
	
	public PaymentController(PaymentService paymentService) {
		this.paymentService = paymentService;
	}
	
	
	@PostMapping("/payment")
	public void payment(@RequestBody String id) {
		//this.paymentService.deleteMovie(id);
		System.out.println(id);
	}
	
}