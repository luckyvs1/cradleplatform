/**
 * The Reading class represents a the patient's present medical reading
 * A patient's reading will be stored on and fetched from the database.
 */
package org.cradlePlatform.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Set;

@Entity
@Table(name = "Reading", schema = "schemas")
public class ReadingEntity {

    @Id
    @GeneratedValue
    private int id;

    @NotBlank
    @Size(max = 32)
    @Column(name = "reader_id")
    private String readerID;

    @NotBlank
    @Size(max = 32)
    @Column(name = "patient_id")
    private String patientID;

    @NotNull
    private Timestamp timestamp;

    private ArrayList<String> symptoms;

    @Column(name = "other_symptoms")
    private String otherSymptoms;

    @NotNull
    @Column(name = "systolic_bp")
    private int systolicBloodPressure;

    @NotNull
    @Column(name = "diastolic_bp")
    private int diastolicBloodPressure;

    @NotNull
    @Column(name = "pulse_rate")
    private int pulseRate;

    private String notes;

    @Column(name = "need_followup")
    private Boolean needFollowUp;

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
