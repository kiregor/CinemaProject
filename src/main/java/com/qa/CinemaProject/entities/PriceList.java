package com.qa.CinemaProject.entities;

public class PriceList {

	private int adultPrice;
	private int childPrice;
	private int concessionsPrice;
	
	public PriceList(String adultPriceStr, String childPriceStr, String concessionsPriceStr) {
		adultPrice = Integer.parseInt(adultPriceStr);
		childPrice = Integer.parseInt(childPriceStr);
		concessionsPrice = Integer.parseInt(concessionsPriceStr);
	}

	public int getAdultPrice() {
		return adultPrice;
	}

	public void setAdultPrice(int adultPrice) {
		this.adultPrice = adultPrice;
	}

	public int getChildPrice() {
		return childPrice;
	}

	public void setChildPrice(int childPrice) {
		this.childPrice = childPrice;
	}

	public int getConcessionsPrice() {
		return concessionsPrice;
	}

	public void setConcessionsPrice(int concessionsPrice) {
		this.concessionsPrice = concessionsPrice;
	}

}
