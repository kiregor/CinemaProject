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



public class TestContactUs {
	
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
		we = driver.findElement(By.xpath("//*[@id=\"root\"]/div/footer/div/div/div[1]/ul/div/li[2]/a"));
	}
	
	@Test
	public void contactUsLinkVisibleOnHomepage() {
		
		assertEquals("Contact Us", we.getText());
	}
	
	@Test
	public void contactUsLinkWorking() {	
	
		we.sendKeys(Keys.ENTER);
		we = driver.findElement(By.xpath("//*[@id=\"bcrumb\"]/ol/span"));
		assertEquals("contact-us", we.getText());		
		
	}
	
	@Test
	public void contactUsLinkPage() {
		we.sendKeys(Keys.ENTER);
		we = driver.findElement(By.xpath("//*[@id=\"submit-button\"]"));
		assertEquals("Submit", we.getText());
	}
	
	@Test
	public void contactUsLinkEmptyEmailAlert() {
		we.sendKeys(Keys.ENTER);
		we = driver.findElement(By.xpath("//*[@id=\"email\"]"));
		we.sendKeys(" ");
		we = driver.findElement(By.xpath("//*[@id=\"message\"]"));
		we.sendKeys(" ");
		we = driver.findElement(By.xpath("//*[@id=\"submit-button\"]"));
		we.sendKeys(Keys.ENTER);
		we = driver.findElement(By.xpath("//*[@id=\"email-form\"]/div[2]/div[2]/div/form/div/div[2]/div"));
		assertEquals("Your message must be more than 20 characters long.", we.getText());	
	}
	
	@Test
	public void contactUsLinkEmailFunction() {
		we.sendKeys(Keys.ENTER);
		we = driver.findElement(By.xpath("//*[@id=\"email\"]"));
		we.sendKeys("linda.biasua@academytraine.com");
		we = driver.findElement(By.xpath("//*[@id=\"message\"]"));
		we.sendKeys("Email Selenium Test Number");
		we = driver.findElement(By.xpath("//*[@id=\"submit-button\"]"));
		we.sendKeys(Keys.ENTER);
		we = driver.findElement(By.xpath("//*[@id=\"email-form\"]/div[2]/div/div/h1"));
		assertEquals("Success.", we.getText());
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
