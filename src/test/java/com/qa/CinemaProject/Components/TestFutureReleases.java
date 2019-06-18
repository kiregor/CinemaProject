package com.qa.CinemaProject.Components;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import java.util.List;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;


public class TestFutureReleases {

	static WebDriver driver;
	static String url= "localhost:3000";
	WebElement we;
	
	@BeforeClass
	public static void setup() {
		System.setProperty("webdriver.chrome.driver", 
				"src\\test\\resources\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		
	}
	
	@Before
	public void init() throws InterruptedException {
		driver.get(url);
		we = driver.findElement(By.xpath("//*[@id=\"root\"]/div/nav/div/div/ul[1]/li[2]/a"));
		Thread.sleep(500);
	}
	
	@Test
	public void futureListingLinkVisibleOnHomepage() {
		
		assertEquals("Future Releases", we.getText());
	}
	
	@Test
	public void futureListingLinkWorking() {	
		we.sendKeys(Keys.ENTER);
		we = driver.findElement(By.xpath("//*[@id=\"bcrumb\"]/ol/span"));
		assertEquals("Future-Listings", we.getText());		
		
	}
	
	
	@After
	public void finalise() {
		
	}
	
	
	@AfterClass
	public static void teardown() throws InterruptedException {
		Thread.sleep(1000);
		driver.quit();
	}
}

