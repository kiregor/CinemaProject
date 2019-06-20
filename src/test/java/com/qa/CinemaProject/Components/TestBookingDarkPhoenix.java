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
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;


public class TestBookingDarkPhoenix {

	static WebDriver driver;
	static String url= "localhost:3000/Listings";
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
		Thread.sleep(500);
	}
	
	
	@Test
	public void bookingFeature() throws InterruptedException {
		
		we = driver.findElement(By.id("Dark Phoenix"));
		assertEquals("Book Now", we.getText());	
		we.click();		
		
		List<WebElement> list= driver.findElements(By.tagName("span"));
		assertTrue(list.stream().anyMatch(x->x.getText().equals("Dark Phoenix")));		
		we = driver.findElement(By.id("timing"));
		we.click();	
		Thread.sleep(5000);
		Actions findseat = new Actions(driver);
		we = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div"));
		findseat.moveToElement(we, 600, 300).click().perform();		
		Thread.sleep(5000);
		findseat.moveToElement(we, 600, 300).click().perform();	
		Thread.sleep(5000);
		we = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div/div/div[3]"));
		we.click();
		Thread.sleep(5000);
		we = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div/div[1]/div/div/div/h1"));
		assertEquals("Summary", we.getText());
		Thread.sleep(5000);
	}
		
	
	@After
	public void finalise() {
		
	}
	
	
	@AfterClass
	public static void teardown() throws InterruptedException {
		driver.quit();
	}
}

