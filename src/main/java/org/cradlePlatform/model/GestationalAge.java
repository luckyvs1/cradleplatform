package org.cradlePlatform.model;

public class GestationalAge {
	public enum GestationalAgeTimeUnit {
		WEEKS,
		MONTHS,
		NONE
	}
	int age;
	GestationalAgeTimeUnit timeUnit;

	public GestationalAge() {

	}

	public GestationalAge(int age, GestationalAgeTimeUnit timeUnit) {
		this.age = age;
		this.timeUnit = timeUnit;
	}

	public int getAge() {
		return age;
	}

	public GestationalAgeTimeUnit getTimeUnit() {
		return timeUnit;
	}
}
