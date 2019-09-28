package org.cradlePlatform.model;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Entity
@Table(name = "Medical_History")
public class MedicalHistory {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name="id", nullable=false, unique=true)
    @NotEmpty(message = "ID Can't Be Empty")
    private int id;

    @Column(name="patient_id", length=32, nullable=false)
    @NotEmpty(message = "Patient ID Can't Be Empty")
    @Size(max = 32)
    private String patientID;

    @Column(name="history")
    private String MedicalHistoryText;

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

    public String getMedicalHistoryText() {
        return MedicalHistoryText;
    }

    public void setMedicalHistoryText(String medicalHistoryText) {
        MedicalHistoryText = medicalHistoryText;
    }
}
