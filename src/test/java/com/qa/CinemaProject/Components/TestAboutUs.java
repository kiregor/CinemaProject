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



public class TestAboutUs {
	
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
		we = driver.findElement(By.xpath("//*[@id=\"root\"]/div/footer/div/div/div[1]/ul/div/li[1]/a"));
	}
	
	@Test //tests that the link exists on homegape
	public void aboutUsLinkVisibleOnHomepage() {
		
		assertEquals("About Us", we.getText());		
	}
	
	
	@Test //tests that link works
	public void abouttUsLinkWorking() {	
		we.sendKeys(Keys.ENTER);
		we = driver.findElement(By.xpath("//*[@id=\"bcrumb\"]/ol/span"));
		assertEquals("about-us", we.getText());			
	}
	
	@Test //tests that the page contains required elements
	@Ignore
	public void aboutUsLinkPage() {
		we.sendKeys(Keys.ENTER);
		we = driver.findElement(By.xpath("/html/body/div/div[1]/div[2]/a/span"));
		assertEquals("fs.cinema", we.getText());
		
	}
	
	@Test //tests that required elements work i.e. external links
	@Ignore
	public void aboutUsLinkFunction() {
		we.sendKeys(Keys.ENTER);
		we = driver.findElement(By.xpath("/html/body/div/div[2]/a"));
		we.sendKeys(Keys.ENTER);
		we = driver.findElement(By.xpath("//*[@id=\"react-root\"]/section/main/div/header/section/div[1]/h1"));
		assertEquals("fs.cinema", we.getText());
		
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
