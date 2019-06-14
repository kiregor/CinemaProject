package com.qa.CinemaProject.test.config;

import java.io.IOException;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.data.mongodb.core.MongoTemplate;

import com.mongodb.MongoClient;
import com.qa.CinemaProject.entities.SequenceId;

import cz.jirutka.spring.embedmongo.EmbeddedMongoFactoryBean;
import static com.qa.CinemaProject.constants.MappingConstants.*;
@Profile("test")
@Configuration
public class MongoEmbedConfiguration {
	
	private final String MONGO_DB_URL = EMBEDDED_MONGODB_HOST;
	private final String MONGO_DB_NAME = EMBEDDED_MONGODB_DATABASE;
	@Bean
	public MongoTemplate mongoTemplate() throws IOException {
		EmbeddedMongoFactoryBean mongo = new EmbeddedMongoFactoryBean();
		mongo.setBindIp(MONGO_DB_URL);
		MongoClient mongoClient = mongo.getObject();
		MongoTemplate mongoTemplate = new MongoTemplate(mongoClient, MONGO_DB_NAME);
		// Required for MongoDB auto-increment
		SequenceId siBooking = new SequenceId(),
				siMovie = new SequenceId(),
				siScreen = new SequenceId(),
				siEvent = new SequenceId();
		siBooking.setId(BOOKING_COLLECTION);
		siBooking.setSeq(0);
		mongoTemplate.save(siBooking, SEQUENCE_COLLECTION);
		siMovie.setId(MOVIE_COLLECTION);
		siMovie.setSeq(0);
		mongoTemplate.save(siMovie, SEQUENCE_COLLECTION);
		siScreen.setId(SCREEN_COLLECTION);
		siScreen.setSeq(0);
		mongoTemplate.save(siScreen, SEQUENCE_COLLECTION);
		siEvent.setId(EVENT_COLLECTION);
		siEvent.setSeq(0);
		mongoTemplate.save(siEvent, SEQUENCE_COLLECTION);
		return mongoTemplate;
	}

}
