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
    @Size(max = 32)
    private String id;

    @Size(max = 32)
    @Column(name = "attestation_no")
    private String attesttationNo;

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

    @Enumerated(EnumType.STRING)
    private Sex sex;

    @Column(name = "age")
    @NotNull
    private int age;

    @Column(name = "dob")
    @Temporal(TemporalType.DATE)
    private Date dob;

    private boolean pregnant;

    @Enumerated(EnumType.STRING)
    @Column(name = "gestation_age_unit")
    private GestationalAgeTimeUnit gestationAgeUnit;

    @Column(name = "gestation_age")
    private int gestationAge;

    public Patient() {

    }

    public Patient(String id,
                   String villageNo,
                   String initials,
                   int gestationAge,
                   GestationalAgeTimeUnit gestationAgeUnit,
                   Sex sex,
                   boolean pregnant) {
        setId(id);
        setVillageNo(villageNo);
        setInitials(initials);
        setGestationAge(gestationAge);
        setGestationAgeUnit(gestationAgeUnit);
        setSex(sex);
        setPregnant(pregnant);
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
}
