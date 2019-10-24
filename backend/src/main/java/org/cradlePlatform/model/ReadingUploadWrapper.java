package org.cradlePlatform.model;

import java.util.ArrayList;
import java.util.Arrays;

public class ReadingUploadWrapper {
	ArrayList<Reading> readings;

	public ReadingUploadWrapper() {}

	public ReadingUploadWrapper(Reading[] readings) {
		this.readings = new ArrayList<Reading>(Arrays.asList(readings));
	}

	public ArrayList<Reading> getReadings() {
		return readings;
	}
}
