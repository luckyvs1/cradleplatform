/**
 * The Patient class represents a patient and their personal information.
 * A Patient's info will be stored on and fetched from the database.
 */
package org.cradlePlatform.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Date;

@Entity
@Table(name = "Patient", schema = "schemas")
public class Patient {

    @Id
    @NotBlank
    @Column(name="id", unique=true)
    @Size(max = 32)
    private String id;

    @Size(max = 32)
    @Column(name = "attestation_no")
    private String attestationNo;

    @Size(max = 32)
    @Column(name = "first_name")
    private String firstName;

    @Size(max = 32)
    @Column(name = "last_name")
    private String lastName;

    @NotBlank
    @Size(max = 32)
    @Column(name = "village_no")
    private String villageNo;

    @NotBlank
    @Size(max = 32)
    @Column(name = "zone_no")
    private String zoneNo;

    @NotBlank
    @Size(max = 4)
    @Column(name = "initials")
    private String initials;

    @Column(name = "sex")
    @Enumerated(EnumType.STRING)
    private Sex sex;

    @Column(name = "age")
    @NotNull
    private int age;

    @Column(name = "dob")
    @Temporal(TemporalType.DATE)
    private Date dob;

    @Column(name = "pregnant")
    private boolean pregnant;

    @Column(name = "gestational_start_date")
    @Temporal(TemporalType.DATE)
    private Date gestationalStartDate;

    @Enumerated(EnumType.STRING)
    @Column(name = "gestation_age_unit")
    private GestationalAgeTimeUnit gestationAgeUnit;

    @NotBlank
    @Column(name = "current_gestational_age")
    private int currentGestationalAge;

    public Patient() {

    }

    public Patient(String id,
                   String attestationNo,
                   String firstName,
                   String lastName,
                   String villageNo,
                   String zoneNo,
                   String initials,
                   Sex sex,
                   int age,
                   String dob,
                   boolean pregnant,
                   Date gestationalStartDate,
                   GestationalAgeTimeUnit gestationAgeUnit,
                   int currentGestationAge) {
        setId(id);
        setAttestationNo(attestationNo);
        setFirstName(firstName);
        setLastName(lastName);
        setVillageNo(villageNo);
        setInitials(initials);
        setSex(sex);
        setAge(age);
        setDob(dob);
        setPregnant(pregnant);
        setGestationalStartDate(gestationalStartDate);
        setGestationAgeUnit(gestationAgeUnit);
        setCurrentGestationalAge(currentGestationalAge);
    }

    public String getId() {
        return id;
    }
    
    public void setId(String id) {
        this.id = id;
    }

    public String getAttestationNo() {
        return attestationNo;
    }

    public void setAttestationNo(String attestationNo) {
        this.attestationNo = attestationNo;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getVillageNo() {
        return villageNo;
    }

    public void setVillageNo(String villageNo) {
        this.villageNo = villageNo;
    }

    public String getZoneNo() {
        return zoneNo;
    }

    public void setZoneNo(String zoneNo) {
        this.zoneNo = zoneNo;
    }

    public String getInitials() {
        return initials;
    }

    public void setInitials(String initials) {
        this.initials = initials;
    }

    public Sex getSex() {
        return sex;
    }

    public void setSex(Sex sex) {
        this.sex = sex;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public Date getDob() {
        return dob;
    }

    public void setDob(String dob) {
        //example of a dob: "2019-12-01"
        try {
            this.dob = new SimpleDateFormat("yyyy-MM-dd").parse(dob);
        }catch{
            console.log("Can't convert date of birth");
        }
    }

    public boolean isPregnant() {
        return pregnant;
    }

    public void setPregnant(boolean pregnant) {
        this.pregnant = pregnant;
    }

    public Date getGestationalStartDate() {
        return gestationalStartDate;
    }

    public void setGestationalStartDate(Date gestationalStartDate) {
        this.gestationalStartDate = gestationalStartDate;
    }

    public GestationalAgeTimeUnit getGestationAgeUnit() {
        return gestationAgeUnit;
    }

    public void setGestationAgeUnit(GestationalAgeTimeUnit gestationAgeUnit) {
        this.gestationAgeUnit = gestationAgeUnit;
    }

    public int getCurrentGestationalAge() {
        return currentGestationalAge;
    }

    public void setCurrentGestationalAge(int currentGestationalAge) {
        this.currentGestationalAge = currentGestationalAge;
    }
}
