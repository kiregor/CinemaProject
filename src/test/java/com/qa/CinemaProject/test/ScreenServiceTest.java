package com.qa.CinemaProject.test;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.After;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.qa.CinemaProject.CinemaProjectApplication;
import com.qa.CinemaProject.entities.Screen;
import com.qa.CinemaProject.test.services.EmbeddedScreenService;

@ActiveProfiles("test")
@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = CinemaProjectApplication.class)
public class ScreenServiceTest {
	
	@Autowired
	private EmbeddedScreenService ess;
	
	@After
	public void finalize() {
		ess.clear();
	}
	
	@Test
	public void testScreensArePersisted() {
		ess.createScreen(new Screen());
		assertThat(ess.getAllEntities()).isNotEmpty();
	}
	
	@Test
	public void testScreensCanBeUpdated() {
		String testStringType = "Test Screen Type";
		ess.createScreen(new Screen());
		Screen screen = ess.getAllScreens().get(0);
		screen.setScreenType(testStringType);
		long screenId = screen.getId();
		ess.saveScreen(screen);
		assertThat(ess.retrieveScreen(screenId))
		.hasFieldOrPropertyWithValue("screenType", testStringType);
	}

}
