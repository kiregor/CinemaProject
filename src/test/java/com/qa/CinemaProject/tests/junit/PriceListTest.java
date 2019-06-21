package com.qa.CinemaProject.tests.junit;

import static org.assertj.core.api.Assertions.*;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

import com.qa.CinemaProject.CinemaProjectApplication;
import com.qa.CinemaProject.entities.PriceList;

@RunWith(SpringRunner.class)
@ActiveProfiles("test")
@SpringBootTest(classes = CinemaProjectApplication.class)
public class PriceListTest {

	@Test
	public void testPriceListConstructor() {
		Integer adultPrice = 1, childPrice = 2, concessionsPrice = 3;
		PriceList pricelist = new PriceList(adultPrice.toString(), childPrice.toString(), concessionsPrice.toString());
		assertThat(pricelist.getAdultPrice()).isEqualTo(adultPrice);
		assertThat(pricelist.getChildPrice()).isEqualTo(childPrice);
		assertThat(pricelist.getConcessionsPrice()).isEqualTo(concessionsPrice);
	}
	
	@Test
	public void testPriceListGetAdultPrice() {
		Integer adultPrice = 1;
		PriceList pricelist = new PriceList("0", "2", "3");
		pricelist.setAdultPrice(adultPrice);
		assertThat(pricelist.getAdultPrice()).isEqualTo(adultPrice);
	}
	
	@Test
	public void testPriceListGetChildPrice() {
		Integer childPrice = 1;
		PriceList pricelist = new PriceList("1", "0", "3");
		pricelist.setChildPrice(childPrice);
		assertThat(pricelist.getChildPrice()).isEqualTo(childPrice);
	}
	
	@Test
	public void testPriceListGetConcessionsPrice() {
		Integer concessionsPrice = 3;
		PriceList pricelist = new PriceList("1", "2", "0");
		pricelist.setConcessionsPrice(concessionsPrice);
		assertThat(pricelist.getConcessionsPrice()).isEqualTo(concessionsPrice);
	}
	
	@Test
	public void testPriceListToString() {
		Integer adultPrice = 1, childPrice = 2, concessionsPrice = 3;
		PriceList pricelist = new PriceList(adultPrice.toString(), childPrice.toString(), concessionsPrice.toString());
		String expected = String.format("PriceList[adultPrice=%s, childPrice='%s', concessionsPrice='%s']", adultPrice, childPrice, concessionsPrice);
		assertThat(pricelist.toString()).isEqualTo(expected);
	}
}
