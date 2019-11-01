/**
 * The FollowUp class represents a follow-up report for patients.
 * All relevant follow-up information for a patient will be stored
 * on and fetched from the database.
 */
package org.cradlePlatform.model;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Entity
@Table(name = "FollowUp")
public class FollowUp {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id", nullable=false, unique=true)
    private int id;

    @Column(name="patient_id", length=32, nullable=false)
    private int patientId;

    @Column(name="notes")
    private String followUpNotes;

    @Column(name="required")
    private Boolean required;

    @Column(name="frequency")
    private String frequency;

    @Column(name="diagnosis")
    private String diagnosis;

    @Column(name="treatment")
    private String treatment;

    public FollowUp() {
    }

    /**
     * Update a FollowUp by replacing all fields except id
     * @param updatedFollowUp
     */
    public void updateFollowUp(FollowUp updatedFollowUp) {
        this.setFollowUpNotes(updatedFollowUp.getFollowUpNotes());
        this.setRequired(updatedFollowUp.getRequired());
        this.setFrequency(updatedFollowUp.getFrequency());
        this.setDiagnosis(updatedFollowUp.getDiagnosis());
        this.setTreatment(updatedFollowUp.getTreatment());
    }

    public int getId() {
        return id;
    }

    public int getPatientId() {
        return patientId;
    }

    public void setPatientId(int patientId) {
        this.patientId = patientId;
    }

    public String getFollowUpNotes() {
        return followUpNotes;
    }

    public void setFollowUpNotes(String followUpNotes) {
        this.followUpNotes = followUpNotes;
    }

    public Boolean getRequired() {
        return required;
    }

    public void setRequired(Boolean required) {
        this.required = required;
    }

    public String getFrequency() {
        return frequency;
    }

    public void setFrequency(String frequency) {
        this.frequency = frequency;
    }

    public String getDiagnosis() {
        return diagnosis;
    }

    public void setDiagnosis(String diagnosis) {
        this.diagnosis = diagnosis;
    }

    public String getTreatment() {
        return treatment;
    }

    public void setTreatment(String treatment) {
        this.treatment = treatment;
    }
}
