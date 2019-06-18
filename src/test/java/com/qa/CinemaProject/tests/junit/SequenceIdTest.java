package com.qa.CinemaProject.tests.junit;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

import com.qa.CinemaProject.CinemaProjectApplication;
import com.qa.CinemaProject.entities.SequenceId;

@RunWith(SpringRunner.class)
@ActiveProfiles("test")
@SpringBootTest(classes = CinemaProjectApplication.class)
public class SequenceIdTest {
	
	@Test
	public void testSequenceIdGetId() {
		String expected = "3";
		SequenceId sequenceId = new SequenceId();
		sequenceId.setId(expected);
		assertThat(sequenceId.getId()).isEqualTo(expected);
	}
	
	@Test
	public void testSequenceIdToString() {
		String id = "3";
		long seq = 10;
		SequenceId sequenceId = new SequenceId();
		sequenceId.setId(id);
		sequenceId.setSeq(seq);
		String expected = "MovieSequenceId [id=" + id + ", seq=" + seq + "]";
		assertThat(sequenceId.toString()).isEqualTo(expected);
	}

}
