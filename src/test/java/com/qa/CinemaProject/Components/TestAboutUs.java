package com.qa.CinemaProject.Components;


import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import java.util.List;
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


public class TestAboutUs {
	
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
		we = driver.findElement(By.xpath("//*[@id=\"root\"]/div/footer/div/div[1]/ul/li[1]/a"));
		Thread.sleep(500);
	}
	
	@Test //tests that the link exists on home page
	public void aboutUsLinkVisibleOnHomepage() {
		
		assertEquals("About Us", we.getText());		
	}
	
	
	@Test //tests that link works
	public void abouttUsLinkWorking() {	
		we.sendKeys(Keys.ENTER);
		we = driver.findElement(By.xpath("//*[@id=\"bcrumb\"]/ol/span"));
		assertEquals("About-us", we.getText());			
	}
	
	@Test //tests that the page contains required elements

	public void aboutUsLinkContent() throws InterruptedException {
		we.sendKeys(Keys.ENTER);
		Thread.sleep(000);
		
		List <WebElement> taglist =  driver.findElements(By.tagName("iframe"));
		assertTrue(taglist.size()>0);
	}
	
	@Test //tests that required elements work i.e. external links
	public void aboutUsLinkFunction() throws InterruptedException {
		we.sendKeys(Keys.ENTER);
		Thread.sleep(1000);
		we = driver.findElement(By.tagName("iframe"));
		we.click();		
		
	}	
	
	
	@AfterClass
	public static void teardown() throws InterruptedException {
		Thread.sleep(1000);
		driver.quit();
	}
}
