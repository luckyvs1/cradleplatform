/**
 * The Patient class represents a patient and their personal information.
 * A Patient's info will be stored on and fetched from the database.
 */
package org.cradlePlatform.model;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Entity
@Table(name = "Patient")
public class Patient {

    @Id
    @Column(name="id", length=32, nullable=false, unique=true)
    @NotEmpty(message = "ID Can't Be Empty")
    @Size(max = 32)
    private String id;

    @Column(name="village_no", length=32, nullable=false)
    @NotEmpty(message = "Village Number Can't Be Empty")
    @Size(max = 32)
    private String village_no;

    @Column(name="initials", length=4, nullable=false)
    @NotEmpty(message = "Initials Can't Be Empty")
    @Size(max = 4)
    private String initials;

    @Column(name="sex")
    @Enumerated(EnumType.STRING)
    private Sex sex;

    @Column(name="age", nullable=false)
    @NotEmpty(message = "Age Can't Be Empty")
    private int age;

    @Column(name="pregnant")
    private boolean pregnant;

    @Column(name="gestation_age_unit")
    @Enumerated(EnumType.STRING)
    private GestationalAgeTimeUnit gestationAgeUnit;

    @Column(name="gestation_age")
    private int gestationAge;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getVillageNo() {
        return village_no;
    }

    public void setVillage_no(String village_no) {
        this.village_no = village_no;
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

    public boolean checkPregnantConditions() {
        if (pregnant && gestationAge > 0) {
            return true;
        } else if (!pregnant && gestationAge == 0){
            return true;
        }
        return false;
    }

}
