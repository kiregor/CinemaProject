package com.qa.CinemaProject.tests.junit;

import static org.assertj.core.api.Assertions.*;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

import com.qa.CinemaProject.CinemaProjectApplication;
import com.qa.CinemaProject.entities.Movie;
import com.qa.CinemaProject.exception.SequenceException;
import com.qa.CinemaProject.tests.junit.services.EmbeddedMovieService;

@RunWith(SpringRunner.class)
@ActiveProfiles("test")
@SpringBootTest(classes = CinemaProjectApplication.class)
public class SequenceExceptionTest {

	// Testing any service that uses an instance of SequenceRepo
	@Autowired
	EmbeddedMovieService ems;

	@After
	public void finalize() {
		ems.clear();
		ems.createSequence();
	}
	
	@Test(expected = SequenceException.class)
	public void testSequenceExceptionIsThrown() {
		ems.createMovie(new Movie());
		ems.dropSequence();
		ems.createMovie(new Movie());
	}

	@Test
	public void testSequenceExceptionSerialVersionUID() {
		SequenceException sequenceException = new SequenceException("");
		long svuid = SequenceException.getSerialversionuid();
		try {
			throw sequenceException;
		} catch (SequenceException se) {
			assertThat(SequenceException.getSerialversionuid()).isEqualTo(svuid);
		}
	}

	@Test
	public void testSequenceExceptionErrCode() {
		String testErrorCode = "This is a test";
		SequenceException sequenceException = new SequenceException("");
		sequenceException.setErrCode(testErrorCode);
		try {
			throw sequenceException;
		} catch (SequenceException se) {
			assertThat(se.getErrCode()).isEqualTo(testErrorCode);
		}
	}

	@Test
	public void testSequenceExceptionErrMsg() {
		String testErrorMsg = "This is a test";
		SequenceException sequenceException = new SequenceException("");
		sequenceException.setErrMsg(testErrorMsg);
		try {
			throw sequenceException;
		} catch (SequenceException se) {
			assertThat(se.getErrMsg()).isEqualTo(testErrorMsg);
		}
	}

	@Test
	public void testSequenceExceptionToString() {
		String errCode = "Test Error Code", errMsg = "Test Error Message";
		String expected = String.format("SequenceException [errCode=%s, errMsg=%s]", errCode, errMsg);
		SequenceException sequenceException = new SequenceException("");
		sequenceException.setErrCode(errCode);
		sequenceException.setErrMsg(errMsg);
		try {
			throw sequenceException;
		} catch (SequenceException se) {
			assertThat(se.toString()).isEqualTo(expected);
		}
	}

}
