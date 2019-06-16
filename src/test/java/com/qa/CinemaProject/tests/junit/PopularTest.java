package com.qa.CinemaProject.tests.junit;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

import com.qa.CinemaProject.CinemaProjectApplication;
import com.qa.CinemaProject.entities.Popular;

@RunWith(SpringRunner.class)
@ActiveProfiles("test")
@SpringBootTest(classes = CinemaProjectApplication.class)
public class PopularTest {
	
	@Test
	public void testPopularToString() {
		String movieOne = "Test Movie One", movieTwo = "Test Movie Two", movieThree = "Test Movie Three";
		Popular popular = new Popular("", "", "");
		popular.setMovieOne(movieOne);
		popular.setMovieTwo(movieTwo);
		popular.setMovieThree(movieThree);
		String expected = "Popular [movieOne=" + movieOne + ", movieTwo=" + movieTwo + ", movieThree=" + movieThree + "]";
		assertThat(popular.toString()).isEqualTo(expected);
	}
}
