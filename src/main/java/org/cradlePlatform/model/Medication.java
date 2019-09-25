package org.cradlePlatform.model;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
import java.util.Date;

@Entity
@Table(name = "Medication")
public class Medication {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @NotEmpty(message = "ID Can't Be Empty")
    private int id;

    @OneToOne(cascade = CascadeType.REMOVE)
    @NotEmpty(message = "History ID Can't Be Empty")
    private int drugHistoryID;

    @NotEmpty(message = "Drug Name Can't Be Empty")
    @Size(max = 32)
    private String drugName;

    @NotEmpty(message = "Dosage Can't Be Empty")
    @Size(max = 32)
    private String dosage;

    @NotEmpty(message = "Start Date Can't Be Empty")
    private Date startDate;

    private Date endDate;

    public Medication(@NotEmpty(message = "History ID Can't Be Empty") int drugHistoryID, @NotEmpty(message = "Drug Name Can't Be Empty") String drugName,
                      @NotEmpty(message = "Dosage Can't Be Empty") String dosage, @NotEmpty(message = "Start Date Can't Be Empty") Date startDate, Date endDate) {
        this.drugHistoryID = drugHistoryID;
        this.drugName = drugName;
        this.dosage = dosage;
        this.startDate = startDate;
        this.endDate = endDate;
    }

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
