package org.cradlePlatform.model;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
import java.sql.Timestamp;
import java.util.ArrayList;

@Entity
@Table(name = "Reading")
public class Reading {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @NotEmpty(message = "ID Can't Be Empty")
    private int id;

    @OneToOne(cascade = CascadeType.REMOVE)
    @NotEmpty(message = "Patient ID Can't Be Empty")
    @Size(max = 32)
    private String patientID;

    @OneToOne(cascade = CascadeType.REMOVE)
    @NotEmpty(message = "Reader ID Can't Be Empty")
    @Size(max = 32)
    private String readerID;

    @NotEmpty(message = "Timestamp Can't Be Empty")
    private Timestamp timestamp;

    @NotEmpty(message = "Systolic Blood Pressure Can't Be Empty")
    private int systolicBloodPressure;

    @NotEmpty(message = "Diastolic Blood Pressure Can't Be Empty")
    private int diastolicBloodPressure;

    private String notes;
    private Boolean needFollowUp;
    private ArrayList<String> symptoms;
    private String otherSymptoms;

    public Reading(@NotEmpty(message = "Patient ID Can't Be Empty") String patientID, @NotEmpty(message = "Reader ID Can't Be Empty") String readerID, @NotEmpty(message = "Timestamp Can't Be Empty") Timestamp timestamp, ArrayList<String> symptoms, String otherSymptoms,
                   @NotEmpty(message = "Systolic Blood Pressure Can't Be Empty") int systolicBloodPressure, @NotEmpty(message = "Diastolic Blood Pressure Can't Be Empty") int diastolicBloodPressure, String notes, Boolean needFollowUp) {
        this.patientID = patientID;
        this.readerID = readerID;
        this.timestamp = timestamp;
        this.symptoms = symptoms;
        this.otherSymptoms = otherSymptoms;
        this.systolicBloodPressure = systolicBloodPressure;
        this.diastolicBloodPressure = diastolicBloodPressure;
        this.notes = notes;
        this.needFollowUp = needFollowUp;
    }

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
}
