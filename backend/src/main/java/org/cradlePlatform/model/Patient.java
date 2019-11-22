/**
 * The Patient class represents a patient and their personal information.
 * A Patient's info will be stored on and fetched from the database.
 */
package org.cradlePlatform.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.validation.constraints.Min;
import java.util.Date;

@Entity
@Table(name = "Patient")
public class Patient {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="id", unique=true, nullable = false)
    private int id;

    @Size(max = 32)
    @Column(name = "attestation_no")
    private String attestationNo;

    @Size(max = 32)
    @Column(name = "first_name")
    private String firstName;

    @Size(max = 32)
    @Column(name = "last_name")
    private String lastName;

    @Size(max = 32)
    @Column(name = "village_no", length=32)
    private String villageNo;

    @Size(max = 32)
    @Column(name = "zone_no", length=32)
    private String zoneNo;

    @Column(name="household_no", length=32)
    @Size(max = 32)
    private String householdNo;

    @Column(name="block_no", length=32)
    @Size(max = 32)
    private String blockNo;

    @Column(name="tank_no", length=32)
    @Size(max = 32)
    private String tankNo;

    @NotBlank(message = "Initials Can't Be Empty")
    @Size(max = 4)
    @Column(name = "initials", length=4, nullable=false)
    private String initials;

    @Column(name = "sex")
    @Enumerated(EnumType.STRING)
    private Sex sex;

    @Column(name = "age")
    @Min(value = 18, message = "Minimum age must be 18")
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
    @Column(name = "gestational_age_unit")
    private GestationalAgeTimeUnit gestationAgeUnit;

    @Column(name = "current_gestational_age")
    private int currentGestationalAge;

    public Patient() {

    }

    public Patient(String attestationNo,
                   String firstName,
                   String lastName,
                   String villageNo,
                   String zoneNo,
                   String householdNo,
                   String blockNo,
                   String tankNo,
                   String initials,
                   Sex sex,
                   int age,
                   Date dob,
                   boolean pregnant,
                   Date gestationalStartDate,
                   GestationalAgeTimeUnit gestationAgeUnit,
                   int currentGestationAge) {
        setAttestationNo(attestationNo);
        setFirstName(firstName);
        setLastName(lastName);
        setVillageNo(villageNo);
        setZoneNo(zoneNo);
        setHouseholdNo(householdNo);
        setBlockNo(blockNo);
        setTankNo(tankNo);
        setInitials(initials);
        setSex(sex);
        setAge(age);
        setDob(dob);
        setPregnant(pregnant);
        setGestationalStartDate(gestationalStartDate);
        setGestationAgeUnit(gestationAgeUnit);
        setCurrentGestationalAge(currentGestationalAge);
    }

    public int getId() {
        return id;
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

    public String getHouseholdNo() { return householdNo; }

    public void setHouseholdNo(String householdNo) { this.householdNo = householdNo; }

    public String getBlockNo() { return blockNo; }

    public void setBlockNo(String blockNo) { this.blockNo = blockNo; }

    public String getTankNo() { return tankNo; }

    public void setTankNo(String tankNo) { this.tankNo = tankNo; }

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

    public void setDob(Date dob) {
        this.dob = dob;
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
