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
    @NotEmpty(message = "ID Can't Be Empty")
    @Size(max = 32)
    private String id;

    @NotEmpty(message = "Village Number Can't Be Empty")
    @Size(max = 32)
    private String village_no;

    @NotEmpty(message = "Initials Can't Be Empty")
    @Size(max = 4)
    private String initials;

    @Enumerated(EnumType.STRING)
    private String sex;

    @NotEmpty(message = "Age Can't Be Empty")
    private int age;

    private boolean pregnant;

    @Enumerated(EnumType.STRING)
    private String gestationAgeUnit;
    private int gestationAge;

    public Patient(@NotEmpty(message = "ID Can't Be Empty") String id, @NotEmpty(message = "Village Number Can't Be Empty") String village_no, @NotEmpty(message = "Initials Can't Be Empty") String initials,
                   String sex, @NotEmpty(message = "Age Can't Be Empty") int age, boolean pregnant, String gestationAgeUnit, int gestationAge) {
        this.id = id;
        this.village_no = village_no;
        this.initials = initials;
        this.sex = sex;
        this.age = age;
        this.pregnant = pregnant;
        this.gestationAgeUnit = gestationAgeUnit;
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
