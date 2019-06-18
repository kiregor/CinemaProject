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



public class TestContactUs {
	
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
		we = driver.findElement(By.xpath("//*[@id=\"root\"]/div/footer/div/div[1]/ul/li[2]/a"));
		Thread.sleep(1000);
	}
	
	@Test 	
	public void contactUsLinkVisibleOnHomepage() {		
		assertEquals("Contact Us", we.getText());
	}
	
	@Test	
	public void contactUsLinkWorking() {		
		we.sendKeys(Keys.ENTER);
		we = driver.findElement(By.xpath("//*[@id=\"bcrumb\"]/ol/span"));
		assertEquals("Contact-us", we.getText());		
		
	}
	
	@Test	
	public void contactUsLinkPageTelephone() {
		we.sendKeys(Keys.ENTER);
		we = driver.findElement(By.xpath("//*[@id=\"email-form\"]/div[2]/div[3]/div/ul/li[2]/strong"));
		assertEquals("Telephone:", we.getText());
	}
	
	@Test
	public void contactUsLinkEmptyEmailAlert() throws InterruptedException {
		we.sendKeys(Keys.ENTER);
		Thread.sleep(1000);
		we = driver.findElement(By.xpath("//*[@id=\"submit-button\"]"));		
		we.click();
		Thread.sleep(1000);
		we = driver.findElement(By.xpath("//*[@id=\"email-form\"]/div[2]/div[2]/div/form/div/div[2]/div"));
		assertEquals("×\n" + 
				"Your message must be more than 20 characters long.", we.getText());	
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
