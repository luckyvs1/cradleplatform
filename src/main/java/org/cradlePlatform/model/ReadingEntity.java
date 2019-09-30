package org.cradlePlatform.model;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
import java.sql.Timestamp;
import java.util.ArrayList;

@Entity
@Table(name = "Reading")
public class ReadingEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name="id", nullable=false, unique=true)
    @NotEmpty(message = "ID Can't Be Empty")
    private int id;

    @Column(name="reader_id", length=32, nullable=false)
    @NotEmpty(message = "Reader ID Can't Be Empty")
    @Size(max = 32)
    private String readerID;

    @Column(name="patient_id", length=32, nullable=false)
    @NotEmpty(message = "Patient ID Can't Be Empty")
    @Size(max = 32)
    private String patientID;

    @Column(name="timestamp", nullable=false)
    @NotEmpty(message = "Timestamp Can't Be Empty")
    private Timestamp timestamp;

    @Column(name="systolic_bp", nullable=false)
    @NotEmpty(message = "Systolic Blood Pressure Can't Be Empty")
    private int systolicBloodPressure;

    @Column(name="diastolic_bp", nullable=false)
    @NotEmpty(message = "Diastolic Blood Pressure Can't Be Empty")
    private int diastolicBloodPressure;

    @Column(name="pulse_rate", nullable=false)
    @NotEmpty(message = "Pulse Rate Can't Be Empty")
    private int pulseRate;

    @Column(name="notes")
    private String notes;

    @Column(name="need_followup")
    private Boolean needFollowUp;

    @Column(name="symptoms")
    private ArrayList<String> symptoms;

    @Column(name="other_symptoms", nullable=false)
    private String otherSymptoms;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPatientID() {
        return patientID;
    }

    public void setPatientID(String patientID) {
        this.patientID = patientID;
    }

    public String getReaderID() {
        return readerID;
    }

    public void setReaderID(String readerID) {
        this.readerID = readerID;
    }

    public Timestamp getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Timestamp timestamp) {
        this.timestamp = timestamp;
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

    public ArrayList<String> getSymptoms() {
        return symptoms;
    }

    public void setSymptoms(ArrayList<String> symptoms) {
        this.symptoms = symptoms;
    }

    public String getOtherSymptoms() {
        return otherSymptoms;
    }

    public void setOtherSymptoms(String otherSymptoms) {
        this.otherSymptoms = otherSymptoms;
    }

    public int getPulseRate() {
        return pulseRate;
    }

    public void setPulseRate(int pulseRate) {
        this.pulseRate = pulseRate;
    }
}
