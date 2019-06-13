package com.qa.CinemaProject.Components;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

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


//aboutUsLinkVisibleOnHomepage()
//abouttUsLinkWorking() 
//aboutUsLinkPage()
//aboutUsLinkFunction()

public class TestCurrentListings {

	static WebDriver driver;
	static String url= "localhost:3000";
	WebElement we;
	
	@BeforeClass
	public static void setup() {
		System.setProperty("webdriver.chrome.driver", 
				"C:\\Users\\Admin\\Downloads\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		
	}
	
	@Before
	public void init() {
		driver.get(url);
		we = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[1]/nav/div/div/ul[1]/li[1]/a"));
	}
	
	@Test
	public void contactUsLinkVisibleOnHomepage() {
		
		assertEquals("Listings", we.getText());
	}
	
	@Test
	public void contactUsLinkWorking() {	
		we.sendKeys(Keys.ENTER);
		we = driver.findElement(By.xpath("//*[@id=\"bcrumb\"]/ol/span"));
		assertEquals("Listings", we.getText());		
		
	}
	
	@Test
	public void contactUsLinkPageContent() {		;
		we.sendKeys(Keys.ENTER);		
		we = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[3]/div/div"));
		assertTrue((we.isDisplayed() && we.isEnabled()));
		//web elements can't be accessed "NoSuchElementException"
		//in the big div count how many times images/booking are inserted must be at least 4
		
		//we = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[3]/div/div/div/div/div/div[1]/div/div[1]/img"));
	
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
