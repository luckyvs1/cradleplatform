package org.cradlePlatform.model;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Date;

@Entity
@Table(name = "Patient")
public class Patient {

    @Id
    @GeneratedValue(generator="system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    @Column(name = "id")
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

    @NotBlank(message = "Village Number Can't Be Empty")
    @Size(max = 32)
    @Column(name = "village_no")
    private String villageNo;

    @NotBlank(message = "Zone Number Can't Be Empty")
    @Size(max = 32)
    @Column(name = "zone_no")
    private String zoneNo;

    @Column(name="household_no")
    @Size(max = 32)
    private String householdNo;

    @Column(name="block_no")
    @Size(max = 32)
    private String blockNo;

    @Column(name="tank_no")
    @Size(max = 32)
    private String tankNo;

    @NotBlank(message = "Initials Can't Be Empty")
    @Size(max = 4)
    @Column(name = "initials")
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

    @NotNull
    @Column(name = "current_gestational_age")
    private int currentGestationalAge;

    public String getId() {
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
