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



public class TestFindUs {

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
		we = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[1]/nav/div/div/ul[1]/li[4]/a"));
	}
	
	@Test
	public void contactUsLinkVisibleOnHomepage() {	
		
		assertEquals("Getting Here", we.getText());		
	}
	
	@Test
	public void contactUsLinkWorking() {
		
		we.sendKeys(Keys.ENTER);
		we = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[3]/div/div/div[2]/div/div/h1"));
		assertEquals("Find Us", we.getText());			
	}
	
	@Test
	@Ignore
	public void contactUsLinkPageContent() {
		we.sendKeys(Keys.ENTER);
		we = driver.findElement(By.xpath("//*[@id=\"mapDiv\"]/div/div/div[9]/div/div/div/div[2]/div[1]/a/div[2]"));
		assertEquals("Directions", we.getText());		
	}
	
	@Test
	@Ignore
	public void contactUsLinkPageFunction() {
		we.sendKeys(Keys.ENTER);
		we = driver.findElement(By.xpath("//*[@id=\"mapDiv\"]/div/div/div[9]/div/div/div/div[2]/div[1]/a/div[2]"));
		we.sendKeys(Keys.ENTER);
		we = driver.findElement(By.xpath("//*[@id=\"sb_ifc51\"]/input"));
		assertEquals("International House, 1 St Katharine's Way, St Katharine's & Wapping, London E1W 1YL, UK", we.getText());	
			
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

