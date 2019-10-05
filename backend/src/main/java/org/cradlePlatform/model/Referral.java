package org.cradlePlatform.model;

public class Referral {
	Reading reading;
	String referrerName;
	String username;
	String password;
	String healthCentre;
	VitalsTrafficLight trafficLight;
	String vitalsMessage;
	String comment;


	public Referral(Reading reading,
	                String referrerName,
	                String username,
	                String password,
	                String healthCentre,
	                VitalsTrafficLight trafficLight,
	                String vitalsMessage,
	                String comment) {
		this.reading = reading;
		this.referrerName = referrerName;
		this.username = username;
		this.password = password;
		this.healthCentre = healthCentre;
		this.trafficLight = trafficLight;
		this.vitalsMessage = vitalsMessage;
		this.comment = comment;
	}

	public Reading getReading() {
		return reading;
	}

	public String getReferrerName() {
		return referrerName;
	}

	public String getUsername() {
		return username;
	}

	public String getPassword() {
		return password;
	}

	public String getHealthCentre() {
		return healthCentre;
	}

	public VitalsTrafficLight getTrafficLight() {
		return trafficLight;
	}

	public String getVitalsMessage() {
		return vitalsMessage;
	}

	public String getComment() {
		return comment;
	}
}