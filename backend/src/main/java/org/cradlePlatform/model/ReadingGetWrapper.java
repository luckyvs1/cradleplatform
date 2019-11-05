package org.cradlePlatform.model;

public class ReadingGetWrapper extends Reading {
	private Reading reading;
	private String initials;
	private int age;

	public ReadingGetWrapper() {}

	public ReadingGetWrapper(Reading reading,
	                         String initials,
	                         int age) {
		this.reading = reading;
		this.initials = initials;
		this.age = age;
	}
}
