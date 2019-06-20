package com.qa.CinemaAdminBackend.entities;

import org.springframework.data.annotation.Id;

public class Screen {
	
	@Id
	private long id;
	private String screenType;
	
	public Screen() {}
	
	public Screen(String screenType) {
		this.screenType = screenType;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getScreenType() {
		return screenType;
	}

	public void setScreenType(String str) {
		this.screenType = str;
	}

	@Override
	public String toString() {
		return "Screen [id=" + id + ", screenType=" + screenType + "]";
	}
	
}
