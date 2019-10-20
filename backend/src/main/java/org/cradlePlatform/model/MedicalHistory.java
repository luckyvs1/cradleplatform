/**
 * The MedicalHistory class represents a patient's medical history.
 * A patient's medical history will be stored on and fetched from the database.
 */
package org.cradlePlatform.model;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Positive;
import javax.validation.constraints.Size;

@Entity
@Table(name = "Medical_History")
public class MedicalHistory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id", nullable=false, unique=true)
    private int id;

    @Column(name="patient_id", nullable=false)
    @Positive(message = "Patient ID must be a positive non-zero integer and not empty")
    private int patientId;

    @Column(name="history")
    private String medicalHistoryText;


    public MedicalHistory() {
        this.patientId = -1;
        this.medicalHistoryText = "";
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

    public String getMedicalHistoryText() {
        return medicalHistoryText;
    }

    public void setMedicalHistoryText(String medicalHistoryText) {
        this.medicalHistoryText = medicalHistoryText;
    }
}
