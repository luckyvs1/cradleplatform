/**
 * The DrugHistory class represents a drug history report for a specific patient.
 * A drug history report will be stored on and fetched from the database.
 */

package org.cradlePlatform.model;


import javax.persistence.*;

@Entity
@IdClass(DrugHistoryId.class)
@Table(name = "Drug_History")
public class DrugHistory {

    @Id
    @Column(name="patient_id")
    private int patientId;

    @Id
    @Column(name="medication_id")
    private int medicationId;

    public int getMedicationId() {
        return medicationId;
    }

    public void setMedicationId(int medicationId) {
        this.medicationId = medicationId;
    }

    public int getPatientId() {
        return patientId;
    }

    public void setPatientId(int patientId) {
        this.patientId = patientId;
    }
}
