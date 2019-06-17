package com.qa.CinemaProject.tests.junit;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

import com.qa.CinemaProject.CinemaProjectApplication;
import com.qa.CinemaProject.entities.Screen;

@RunWith(SpringRunner.class)
@ActiveProfiles("test")
@SpringBootTest(classes = CinemaProjectApplication.class)
public class ScreenTest {
	
	@Test
	public void testScreenConstructor() {
		String screenType = "Test Screen Type";
		Screen screen = new Screen(screenType);
		assertThat(screen.getScreenType()).isEqualTo(screenType);
	}
	
	@Test
	public void testScreenToString() {
		String screenType = "Test Screen Type";
		Screen screen = new Screen(screenType);
		int id = 0;
		screen.setId(id);
		String expected = "Screen [id=" + id + ", screenType=" + screenType + "]";
		assertThat(screen.toString()).isEqualTo(expected);
	}

}
