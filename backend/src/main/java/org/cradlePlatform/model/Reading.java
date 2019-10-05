/**
 * Reading class represents a
 */
package org.cradlePlatform.model;


public class Reading {
	public enum Sex {MALE, FEMALE, OTHER}

	// Patient info
	String patientId;
	String villageNumber;
	String initials;
	GestationalAge gestationalAge;
	Sex sex;
	boolean isPregnant;
	String dateTime; // TODO: figure out if we can go directly to some date/time format instead of String
	String symptoms;
	int systolic;  // Blood pressure, top number
	int diastolic;  // Blood pressure, bottom number
	int pulseRate;
	String notes;

	public Reading() {

	}

	public Reading(String patientId,
	               String villageNumber,
	               String initials,
	               GestationalAge gestationalAge,
	               Sex sex,
	               boolean isPregnant,
	               String dateTime,
	               String symptoms,
	               int systolic,
	               int diastolic,
	               int pulseRate,
	               String notes) {
		this.patientId = patientId;
		this.villageNumber = villageNumber;
		this.initials = initials;
		this.gestationalAge = gestationalAge;
		this.sex = sex;
		this.isPregnant = isPregnant;
		this.dateTime = dateTime;
		this.symptoms = symptoms;
		this.systolic = systolic;
		this.diastolic = diastolic;
		this.pulseRate = pulseRate;
		this.notes = notes;
	}

	public String getPatientId() {
		return patientId;
	}

	public String getVillageNumber() {
		return villageNumber;
	}

	public String getInitials() {
		return initials;
	}

	public GestationalAge getGestationalAge() {
		return gestationalAge;
	}

	public Sex getSex() {
		return sex;
	}

	public boolean isPregnant() {
		return isPregnant;
	}

	public String getDateTime() {
		return dateTime;
	}

	public String getSymptoms() {
		return symptoms;
	}

	public int getSystolic() {
		return systolic;
	}

	public int getDiastolic() {
		return diastolic;
	}

	public int getPulseRate() {
		return pulseRate;
	}

	public String getNotes() {
		return notes;
	}
}
