package com.qa.CinemaProject.Components;
import static org.junit.Assert.assertEquals;

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

public class TestClassifications {
	
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
	public void init() {
		driver.get(url);
		we = driver.findElement(By.xpath("//*[@id=\"root\"]/div/footer/div/div[1]/ul/li[3]/a"));
	}
	
	@Test
	public void classificationLinkVisibleOnHomepage() {	
		
		assertEquals("Classifications", we.getText());	
	}
	
	@Test
	public void classificationLinkWorking() {
		
		we.sendKeys(Keys.ENTER);
		we = driver.findElement(By.xpath("//*[@id=\"block-menu-block-1\"]/nav/div/div/div/ul/li[2]/a"));
		assertEquals("About classification", we.getText());
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




