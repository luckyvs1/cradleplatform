package org.cradlePlatform.model;


import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
import java.util.Date;

@Entity
@Table(name = "User_Info")
public class UserInfo {

    @Id

    @NotEmpty(message = "ID Can't Be Empty")
    @Size(max = 32)
    private String id;

    @NotEmpty(message = "Station Number Can't Be Empty")
    @Size(max = 32)
    private String at_a_station_no;

    @NotEmpty(message = "First Name Can't Be Empty")
    @Size(max = 32)
    private String first_name;

    @NotEmpty(message = "Last Name Can't Be Empty")
    @Size(max = 32)
    private String last_name;

    @NotEmpty(message = "Date of Birth Can't Be Empty")
    private Date dob;

    @NotEmpty(message = "Country Can't Be Empty")
    @Size(max = 32)
    private String country;

    @NotEmpty(message = "Phone Number Can't Be Empty")
    @Size(max = 16)
    private String phone;

    @Size(max = 32)
    private String email;

    @Enumerated(EnumType.STRING)
    private RoleType role;

    public String getId() {
        return id;
    }

    public String getAtAStationNo() {
        return at_a_station_no;
    }

    public String getFirstName() {
        return first_name;
    }

    public String getLastName() {
        return last_name;
    }

    public Date getDOB() {
        return dob;
    }

    public String getCountry() {
        return country;
    }

    public String getPhone() {
        return phone;
    }

    public String getEmail() {
        return email;
    }

    public RoleType getRole() {
        return role;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setAtAStationNo(String at_a_station_no) {
        this.at_a_station_no = at_a_station_no;
    }

    public void setFirstName(String first_name) {
        this.first_name = first_name;
    }

    public void setLastName(String last_name) {
        this.last_name = last_name;
    }

    public void setDob(Date dob) {
        this.dob = dob;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setRole(RoleType role) {
        this.role = role;
    }
}