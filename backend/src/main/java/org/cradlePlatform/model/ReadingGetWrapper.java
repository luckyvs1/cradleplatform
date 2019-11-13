package org.cradlePlatform.model;

import java.sql.Timestamp;
import java.util.Date;

public class ReadingGetWrapper {
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

  public String getInitials() {
    return this.initials;
  }

  public int getAge() {
    return this.age;
  }

  // -- all getters for Reading super class

	public int getId() {
		return this.reading.getId();
	}

	public String getReaderId() {
		return this.reading.getReaderId();
	}

	public int getPatientId() {
		return this.reading.getPatientId();
	}

	public Timestamp getTimestamp() {
		return this.reading.getTimestamp();
	}

	public String getSymptoms() {
		return this.reading.getSymptoms();
	}

	public String getOtherSymptoms() {
		return this.reading.getOtherSymptoms();
	}

	public int getSystolicBloodPressure() {
		return this.reading.getSystolicBloodPressure();
	}

	public int getDiastolicBloodPressure() {
		return this.reading.getDiastolicBloodPressure();
	}

	public int getPulseRate() {
		return this.reading.getPulseRate();
	}

	public String getNotes() {
		return this.reading.getNotes();
	}

	public Boolean getNeedFollowUp() {
		return this.reading.getNeedFollowUp();
	}

	public String getAppVersion() {
		return this.reading.getAppVersion();
	}

	public Timestamp getDateLastSaved() {
		return this.reading.getDateLastSaved();
	}

	public Date getRecheckVitalsDate() {
		return this.reading.getRecheckVitalsDate();
	}

	public String getDeviceInformation() {
		return this.reading.getDeviceInformation();
	}

	public GestationalAgeTimeUnit getGestationalAgeTimeUnit() {
		return this.reading.getGestationalAgeTimeUnit();
	}

	public int getGestationalAge() {
		return this.reading.getGestationalAge();
	}

	public String getManuallyChangedOcrResults() {
		return this.reading.getManuallyChangedOcrResults();
	}

	public String getPhotoPath() {
		return this.reading.getPhotoPath();
	}

	public float getTotalOcrSeconds() {
		return this.reading.getTotalOcrSeconds();
	}

	public String getRegion() {
		return this.reading.getRegion();
	}

	public boolean getOcrEnabled() {
		return this.reading.getOcrEnabled();
	}

	public boolean getUploadImages() {
		return this.reading.getUploadImages();
	}

	public String getVitalsTrafficLight() {
		return this.reading.getVitalsTrafficLight();
	}

	public String getDiagnosis() {
		return this.reading.getDiagnosis();
	}
}
