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
@Table(name = "Medication", schema = "schemas")
public class Medication {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name="id", nullable=false, unique=true)
    @NotEmpty(message = "ID Can't Be Empty")
    private int id;

    @Column(name="drug_history_id", nullable=false)
    @NotEmpty(message = "History ID Can't Be Empty")
    private int drugHistoryID;

    @Column(name="drug_name", length=32, nullable=false)
    @NotEmpty(message = "Drug Name Can't Be Empty")
    @Size(max = 32)
    private String drugName;

    @Column(name="dosage", length=32, nullable=false)
    @NotEmpty(message = "Dosage Can't Be Empty")
    @Size(max = 32)
    private String dosage;

    @Column(name="start_date", nullable=false)
    @NotEmpty(message = "Start Date Can't Be Empty")
    private Date startDate;

    private Date endDate;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getDrugHistoryID() {
        return drugHistoryID;
    }

    public void setDrugHistoryID(int drugHistoryID) {
        this.drugHistoryID = drugHistoryID;
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
