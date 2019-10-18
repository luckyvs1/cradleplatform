/**
 * The Patient class represents a patient and their personal information.
 * A Patient's info will be stored on and fetched from the database.
 */
package org.cradlePlatform.model;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

@Entity
@Table(name = "Patient")
public class Patient {

    @Id
    @Column(name="id", nullable=false)
    @NotEmpty(message = "ID Can't Be Empty")
    private String id;

    @Column(name="attestation_no", length=32, unique=true)
    private String attestationNo;

    @Column(name="first_name", length=32)
    private String firstName;

    @Column(name="last_name", length=32)
    private String lastName;

    @Column(name="village_no", length=32, nullable=false)
    @NotEmpty(message = "Village Number Can't Be Empty")
    @Size(max = 32)
    private String villageNo;

    @Column(name="zone_no", nullable=false)
    private String zoneNo;

    @Column(name="initials", length=4, nullable=false)
    @NotEmpty(message = "Initials Can't Be Empty")
    @Size(max = 4)
    private String initials;

    @Column(name="sex", nullable=false)
    @Enumerated(EnumType.STRING)
    private Sex sex;

    @Column(name="age", nullable=false)
    @NotEmpty(message = "Age Can't Be Empty")
    private int age;

    @Column(name="dob")
    private Date dob;

    @Column(name="pregnant")
    private boolean pregnant;

    @Column(name="gestational_start_date", nullable=false)
    private Date gestationalAgeStartDate;

    @Column(name="gestational_age_unit")
    @Enumerated(EnumType.STRING)
    private GestationalAgeTimeUnit gestationAgeUnit;

    @Column(name="current_gestational_age", nullable=false)
    @NotEmpty(message = "Gestational age must be set")
    private int gestationAge;

    public Patient() {
        this.id = "test";
        this.attestationNo = "1234";
        this.firstName = "firstName";
        this.lastName = "lastName";
        this.villageNo = "villageNo";
        this.zoneNo = "zoneNo";
        this.initials = "AB";
        this.sex = Sex.F;
        this.age = 33;
        try {
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
            Date date = sdf.parse("2019-01-03");
            this.dob = date;
        } catch (ParseException e) {
            e.printStackTrace();
        }
        this.pregnant = true;
        try {
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
            Date date = sdf.parse("2019-01-03");
            this.gestationalAgeStartDate = date;
        } catch (ParseException e) {
            e.printStackTrace();
        }
        this.gestationAgeUnit = GestationalAgeTimeUnit.week;
        this.gestationAge = 10;
    }

    public Patient(String id,
                   String firstName,
                   String lastName,
                   String attestationNo,
                   String villageNo,
                   String zoneNo,
                   String initials,
                   Sex sex,
                   int age,
                   Date dob,
                   boolean pregnant,
                   Date gestationalAgeStartDate,
                   GestationalAgeTimeUnit gestationAgeUnit,
                   int gestationAge) {
        this.id = id;
        this.attestationNo = attestationNo;
        this.firstName = firstName;
        this.lastName = lastName;
        this.villageNo = villageNo;
        this.zoneNo = zoneNo;
        this.initials = initials;
        this.sex = sex;
        this.age = age;
        this.dob = dob;
        this.pregnant = pregnant;
        this.gestationalAgeStartDate = gestationalAgeStartDate;
        this.gestationAgeUnit = gestationAgeUnit;
        this.gestationAge = gestationAge;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getVillageNo() {
        return villageNo;
    }

    public void setVillageNo(String villageNo) {
        this.villageNo = villageNo;
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

    public boolean isPregnant() {
        return pregnant;
    }

    public void setPregnant(boolean pregnant) {
        this.pregnant = pregnant;
    }

    public GestationalAgeTimeUnit getGestationAgeUnit() {
        return gestationAgeUnit;
    }

    public void setGestationAgeUnit(GestationalAgeTimeUnit gestationAgeUnit) {
        this.gestationAgeUnit = gestationAgeUnit;
    }

    public int getGestationAge() {
        return gestationAge;
    }

    public void setGestationAge(int gestationAge) {
        this.gestationAge = gestationAge;
    }

    public String getAttestationNo() {
        return attestationNo;
    }

    public void setAttestationNo(String attestationNo) {
        this.attestationNo = attestationNo;
    }

    public String getZoneNo() {
        return zoneNo;
    }

    public void setZoneNo(String zoneNo) {
        this.zoneNo = zoneNo;
    }

    public Date getGestationalAgeStartDate() {
        return gestationalAgeStartDate;
    }

    public void setGestationalAgeStartDate(Date gestationalAgeStartDate) {
        this.gestationalAgeStartDate = gestationalAgeStartDate;
    }

    public Date getDob() {
        return dob;
    }

    public void setDob(Date dob) {
        this.dob = dob;
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
}
