package com.qa.CinemaProject.email;

public class Email {

	private String queryNo;
	
	private String sender;
	private String message;

	public Email() {
		
	}
	
	public Email(String sender, String message, String queryNo) {
		super();
		this.sender = sender;
		this.message = message;
		this.queryNo = queryNo;
	}
	
	public String getQueryNo() {
		return queryNo;
	}
	
	public void setQueryNo(String queryNo) {
		this.queryNo = queryNo;
	}

	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public String getSender() {
		return sender;
	}
	public void setSender(String sender) {
		this.sender = sender;
	}
	
	@Override
	public String toString() {
		return String.format("Email [ sender = %s, message = %s, queryNo = %s ]", sender, message, queryNo);
	}
}
