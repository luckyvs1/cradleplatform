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

    @NotBlank(message = "Village Number Can't Be Empty")
    @Size(max = 32)
    @Column(name = "village_no", length=32, nullable=false)
    private String villageNo;

    @NotBlank(message = "Zone Number Can't Be Empty")
    @Size(max = 32)
    @Column(name = "zone_no", length=32, nullable=false)
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

    public boolean equals(Object object) {
        if (this == object) return true;
        if (object == null || getClass() != object.getClass()) return false;
        if (!super.equals(object)) return false;
        Patient patient = (Patient) object;
        return age == patient.age &&
                pregnant == patient.pregnant &&
                currentGestationalAge == patient.currentGestationalAge &&
                java.util.Objects.equals(attestationNo, patient.attestationNo) &&
                java.util.Objects.equals(firstName, patient.firstName) &&
                java.util.Objects.equals(lastName, patient.lastName) &&
                java.util.Objects.equals(villageNo, patient.villageNo) &&
                java.util.Objects.equals(zoneNo, patient.zoneNo) &&
                java.util.Objects.equals(householdNo, patient.householdNo) &&
                java.util.Objects.equals(blockNo, patient.blockNo) &&
                java.util.Objects.equals(tankNo, patient.tankNo) &&
                java.util.Objects.equals(initials, patient.initials) &&
                java.util.Objects.equals(sex, patient.sex) &&
                java.util.Objects.equals(dob, patient.dob) &&
                java.util.Objects.equals(gestationalStartDate, patient.gestationalStartDate) &&
                java.util.Objects.equals(gestationAgeUnit, patient.gestationAgeUnit);
    }

    public int hashCode() {
        return java.util.Objects.hash(super.hashCode(), attestationNo, firstName, lastName, villageNo, zoneNo, householdNo, blockNo, tankNo, initials, sex, age, dob, pregnant, gestationalStartDate, gestationAgeUnit, currentGestationalAge);
    }
}
