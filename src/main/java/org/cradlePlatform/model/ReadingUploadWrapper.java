package org.cradlePlatform.model;

import java.util.ArrayList;
import java.util.Arrays;

public class ReadingUploadWrapper {
	ArrayList<Reading> readings;
	String username;
	String password;

	public ReadingUploadWrapper(Reading[] readings, String username, String password) {
		this.username = username;
		this.password = password;
		this.readings = new ArrayList<Reading>(Arrays.asList(readings));
	}

	public ArrayList<Reading> getReading() {
		return readings;
	}

	public String getUsername() {
		return username;
	}

	public String getPassword() {
		return password;
	}
}
