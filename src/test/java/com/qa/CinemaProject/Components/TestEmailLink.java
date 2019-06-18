package com.qa.CinemaProject.Components;
import static org.junit.Assert.*;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Ignore;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class TestEmailLink {
	
	
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
		we = driver.findElement(By.xpath("//*[@id=\"root\"]/div/footer/div/div/div[1]/ul/div/li[2]/a"));
		Thread.sleep(1000);
	}

	@Test
	@Ignore
	public void contactUsLinkEmailFunction() throws InterruptedException {
		we.sendKeys(Keys.ENTER);
		Thread.sleep(1000);
		we = driver.findElement(By.xpath("//*[@id=\"email\"]"));
		we.sendKeys("linda.biasua@academytraine.com");
		we = driver.findElement(By.xpath("//*[@id=\"message\"]"));
		we.sendKeys(" Selenium Test Selenium Test ");
		we = driver.findElement(By.xpath("//*[@id=\"submit-button\"]"));		
		we.click();
		Thread.sleep(30000);		
		we = driver.findElement(By.xpath("//*[@id=\"email-form\"]/div[2]/div/div/h1"));		
		assertEquals("Success", we.getText());
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

