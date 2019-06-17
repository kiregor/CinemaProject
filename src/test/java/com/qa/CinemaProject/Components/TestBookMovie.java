package com.qa.CinemaProject.Components;

import static org.junit.Assert.*;

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

public class TestBookMovie {

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
		Thread.sleep(1000);
		we = driver.findElement(By.id("btn"));
	}

	@Test
	public void bookNowVisible() throws InterruptedException {		
			
		assertEquals("Book Now", we.getText());
				
	}
	
	@Test
	public void bookNowLinkContent() throws InterruptedException {
		we.click();
		we = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div/div/div/div/div/div[4]/div/div/a"));
		assertEquals("Upcoming Showings", we.getText());
				
	}
	
	@Test
	public void bookNowLinkFunction() throws InterruptedException {
		we.click();
		we = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div/div/div/div/div/div[5]/div/div/div/div[1]/div[1]/div[2]"));
		we.click();
				
	}
	
	
	
	@After
	public void finalise() {
		
	}
	
	
	@AfterClass
	public static void teardown() throws InterruptedException {
		Thread.sleep(3000);
		driver.quit();
	}
}


