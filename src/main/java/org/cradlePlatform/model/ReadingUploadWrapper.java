package org.cradlePlatform.model;

public class ReadingUploadWrapper {
	Reading reading;
	String username;
	String password;

	public ReadingUploadWrapper(Reading reading, String username, String password) {
		this.username = username;
		this.password = password;
		this.reading = reading;
	}

	public Reading getReading() {
		return reading;
	}

	public String getUsername() {
		return username;
	}

	public String getPassword() {
		return password;
	}
}
