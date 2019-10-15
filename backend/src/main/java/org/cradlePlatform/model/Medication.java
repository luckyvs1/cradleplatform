/**
 * The Patient class represents a drug and it's relevant information necessary
 * for documentation. A patient's medication will be stored on and fetched
 * from the database.
 */
package org.cradlePlatform.model;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
import java.util.Date;

@Entity
@Table(name = "Medication")
public class Medication {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id", nullable=false, unique=true)
    private int id;

    @Column(name="drug_history_id", nullable=false)
    private int drugHistoryId;

    @Column(name="drug_name", length=32, nullable=false)
    @Size(max = 32)
    private String drugName;

    @Column(name="dosage", length=32, nullable=false)
    @Size(max = 32)
    private String dosage;

    @Column(name="start_date", nullable=false)
    private Date startDate;

    @Column(name="end_date", nullable=false)
    private Date endDate;

    public Medication() {
        this.drugHistoryId = -1;
        this.drugName = "";
        this.dosage = "";
        this.startDate = new Date();
        this.endDate = new Date();
    }

    public int getId() {
        return id;
    }

    public int getDrugHistoryId() {
        return drugHistoryId;
    }

    public void setDrugHistoryId(int drugHistoryId) {
        this.drugHistoryId = drugHistoryId;
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
