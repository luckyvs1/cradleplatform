/**
 * The Reading class represents a the patient's present medical reading
 * A patient's reading will be stored on and fetched from the database.
 */
package org.cradlePlatform.model;

import org.cradlePlatform.model.VitalsTrafficLight;
import org.cradlePlatform.model.GestationalAgeTimeUnit;
import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import org.hibernate.validator.constraints.Range;
import java.sql.Timestamp;
import java.util.Date;

@Entity
@Table(name = "Reading")
public class Reading {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;

	@NotBlank
	@Size(max = 32)
	@Column(name = "reader_id")
	private String readerId;

	@Column(name = "patient_id")
	private int patientId;

	@NotNull
	private Timestamp timestamp;

	private String symptoms;

	@Column(name = "other_symptoms")
	private String otherSymptoms;

	@Range(min = 10, max = 300)
	@Column(name = "systolic_bp")
	private int systolicBloodPressure;

	@Range(min = 10, max = 300)
	@Column(name = "diastolic_bp")
	private int diastolicBloodPressure;

	@Range(min = 30, max = 300)
	@Column(name = "pulse_rate")
	private int pulseRate;

	private String notes;

	@Column(name = "need_followup")
	private Boolean needFollowUp;

	@NotBlank
	@Size(max = 32)
	@Column(name = "app_version")
	private String appVersion;

	@NotNull
	@Column(name = "date_last_saved")
	private Timestamp dateLastSaved;

	@Column(name = "date_recheck_vitals_needed")
	private Timestamp recheckVitalsDate;

	@NotBlank
	@Size(max = 128)
	@Column(name = "device_info")
	private String deviceInformation;

	@Enumerated(EnumType.STRING)
    @Column(name = "gestational_age_unit")
	private GestationalAgeTimeUnit gestationalAgeTimeUnit;

    @Column(name = "gestational_age")
	private int gestationalAge;

	@NotBlank
	@Size(max = 16)
	@Column(name = "manually_changed_OCR_results")
	private String manuallyChangedOcrResults;

	@NotNull
	@Size(max = 128)
	@Column(name = "path_to_photo")
	private String photoPath;

	@NotNull
	@Column(name = "total_OCR_seconds")
	private float totalOcrSeconds;

	@NotBlank
	@Size(max = 32)
	private String region;

	@NotNull
	@Column(name = "OCR_enabled")
	private boolean ocrEnabled;

	@NotNull
	@Column(name = "upload_images")
	private boolean uploadImages;

	@Enumerated(EnumType.STRING)
	@Column(name = "reading_analysis")
	private VitalsTrafficLight vitalsTrafficLight;

	@Column(name = "diagnosis")
	private String diagnosis;

	public Reading() {}

	public int getId() {
		return id;
	}

	public String getReaderId() {
		return readerId;
	}

	public void setReaderId(String readerId) {
		this.readerId = readerId;
	}

	public int getPatientId() {
		return patientId;
	}

	public void setPatientId(int patientId) {
		this.patientId = patientId;
	}

	public Timestamp getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(Timestamp timestamp) {
		this.timestamp = timestamp;
	}

	public String getSymptoms() {
		return symptoms;
	}

	public void setSymptoms(String symptoms) {
		this.symptoms = symptoms;
	}

	public String getOtherSymptoms() {
		return otherSymptoms;
	}

	public void setOtherSymptoms(String otherSymptoms) {
		this.otherSymptoms = otherSymptoms;
	}

	public int getSystolicBloodPressure() {
		return systolicBloodPressure;
	}

	public void setSystolicBloodPressure(int systolicBloodPressure) {
		this.systolicBloodPressure = systolicBloodPressure;
	}

	public int getDiastolicBloodPressure() {
		return diastolicBloodPressure;
	}

	public void setDiastolicBloodPressure(int diastolicBloodPressure) {
		this.diastolicBloodPressure = diastolicBloodPressure;
	}

	public int getPulseRate() {
		return pulseRate;
	}

	public void setPulseRate(int pulseRate) {
		this.pulseRate = pulseRate;
	}

	public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}

	public Boolean getNeedFollowUp() {
		return needFollowUp;
	}

	public void setNeedFollowUp(Boolean needFollowUp) {
		this.needFollowUp = needFollowUp;
	}

	public String getAppVersion() {
		return appVersion;
	}

	public void setAppVersion(String appVersion) {
		this.appVersion = appVersion;
	}

	public Timestamp getDateLastSaved() {
		return dateLastSaved;
	}

	public void setDateLastSaved(Timestamp dateLastSaved) {
		this.dateLastSaved = dateLastSaved;
	}

	public Date getRecheckVitalsDate() {
		return recheckVitalsDate;
	}

	public void setRecheckVitalsDate(Timestamp recheckVitalsDate) {
		this.recheckVitalsDate = recheckVitalsDate;
	}

	public String getDeviceInformation() {
		return deviceInformation;
	}

	public void setDeviceInformation(String deviceInformation) {
		this.deviceInformation = deviceInformation;
	}

	public GestationalAgeTimeUnit getGestationalAgeTimeUnit() {
		return gestationalAgeTimeUnit;
	}

	public void setGestationalAgeTimeUnit(GestationalAgeTimeUnit gestationalAgeTimeUnit) {
		this.gestationalAgeTimeUnit = gestationalAgeTimeUnit;
	}

	public int getGestationalAge() {
		return gestationalAge;
	}

	public void setGestationalAge(int gestationalAge) {
		this.gestationalAge = gestationalAge;
	}

	public String getManuallyChangedOcrResults() {
		return manuallyChangedOcrResults;
	}

	public void setManuallyChangedOcrResults(String manuallyChangedOcrResults) {
		this.manuallyChangedOcrResults = manuallyChangedOcrResults;
	}

	public String getPhotoPath() {
		return photoPath;
	}

	public void setPhotoPath(String photoPath) {
		this.photoPath = photoPath;
	}

	public float getTotalOcrSeconds() {
		return totalOcrSeconds;
	}

	public void setTotalOcrSeconds(float totalOcrSeconds) {
		this.totalOcrSeconds = totalOcrSeconds;
	}

	public String getRegion() {
		return region;
	}

	public void setRegion(String region) {
		this.region = region;
	}

	public boolean getOcrEnabled() {
		return ocrEnabled;
	}

	public void setOcrEnabled(boolean ocrEnabled) {
		this.ocrEnabled = ocrEnabled;
	}

	public boolean getUploadImages() {
		return uploadImages;
	}

	public void setUploadImages(boolean uploadImages) {
		this.uploadImages = uploadImages;
	}

	public VitalsTrafficLight getVitalsTrafficLight() {
		return vitalsTrafficLight;
	}

	public void setVitalsTrafficLight(VitalsTrafficLight vitalsTrafficLight) {
		this.vitalsTrafficLight = vitalsTrafficLight;
	}

	public String getDiagnosis() {
		return diagnosis;
	}

	public void setDiagnosis(String diagnosis) {
		this.diagnosis = diagnosis;
	}
}
