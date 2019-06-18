package com.qa.CinemaProject.entities;

import org.springframework.beans.factory.annotation.Value;

public class Login {

	private String username;
	private String password;

	public Login(String username, String password) {
		super();
		this.username = username;
		this.password = password;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "Login [username=" + username + ", password=" + password + "]";
	}
	
	
	public boolean equals(Login login) {
		return this.username.equals(login.getUsername()) && this.password.equals(login.getPassword());
	}

}
