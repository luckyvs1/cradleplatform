/**
 * The Patient class represents a patient and their personal information.
 * A Patient's info will be stored on and fetched from the database.
 */
package org.cradlePlatform.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "Patient", schema = "schemas")
public class Patient {

    @Id
    @NotBlank
    @Size(max = 32)
    private String id;

    @NotBlank
    @Size(max = 32)
    private String villageNo;

    @NotBlank
    @Size(max = 4)
    private String initials;

    @Enumerated(EnumType.STRING)
    private Sex sex;

    @NotNull
    private int age;

    private boolean pregnant;

    @Enumerated(EnumType.STRING)
    private GestationalAgeTimeUnit gestationAgeUnit;

    private int gestationAge;

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
