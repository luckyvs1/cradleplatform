/**
 * The Patient class represents a drug and it's relevant information necessary
 * for documentation. A patient's medication will be stored on and fetched
 * from the database.
 */
package org.cradlePlatform.model;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.Date;

@Entity
@Table(name = "Medication")
public class Medication {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    @Column(name = "patient_id")
    private int patientId;

    @Column(name="drug_name")
    @Size(max = 32)
    private String drugName;

    @Column(name="dosage")
    @Size(max = 256)
    private String dosage;

    @Temporal(TemporalType.DATE)
    @Column(name="start_date")
    private Date startDate;

    @Temporal(TemporalType.DATE)
    @Column(name="end_date")
    private Date endDate;

    public Medication() {
        this.drugName = "";
        this.dosage = "";
        this.startDate = new Date();
        this.endDate = new Date();
    }

    public int getId() {
        return id;
    }

    public int getPatientId() {
        return patientId;
    }

    public String getDrugName() {
        return drugName;
    }

    public void setDrugName(String drugName) {
        this.drugName = drugName;
    }

    public String getDosage() {
        return dosage;
    }

    public void setDosage(String dosage) {
        this.dosage = dosage;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }
}
