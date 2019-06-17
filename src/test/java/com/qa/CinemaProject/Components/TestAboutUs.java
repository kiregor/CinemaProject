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
		we = driver.findElement(By.xpath("//*[@id=\"root\"]/div/footer/div/div/div[1]/ul/div/li[1]/a"));
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
		assertEquals("about-us", we.getText());			
	}
	
	@Test //tests that the page contains required elements
	@Ignore
	public void aboutUsLinkContent() throws InterruptedException {
		we.sendKeys(Keys.ENTER);
		Thread.sleep(000);
		
		List <WebElement> taglist =  driver.findElements(By.tagName("iframe"));
		assertTrue(taglist.stream().anyMatch(x->x.getText().equals("View More on Instagram")));		
		taglist.stream().forEach(x->System.out.println(x.getText()));
		
	}
	
	@Test //tests that required elements work i.e. external links
	@Ignore
	public void aboutUsLinkFunction() {
		we.sendKeys(Keys.ENTER);
		we = driver.findElement(By.xpath("/html/body/div/div[2]/a"));
		we.click();
		we = driver.findElement(By.xpath("//*[@id=\"react-root\"]/section/main/div/header/section/div[1]/h1"));
		assertEquals("fs.cinema", we.getText());
		
	}	
	
	
	@AfterClass
	public static void teardown() throws InterruptedException {
		Thread.sleep(1000);
		driver.quit();
	}
}
