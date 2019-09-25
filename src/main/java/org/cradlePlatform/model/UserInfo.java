package org.cradlePlatform.model;


import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
import java.util.Date;

@Entity
@Table(name = "User_Info")
public class UserInfo {

    @Id
    @NotEmpty(message = "Username Can't Be Empty")
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
    private String role;

    public UserInfo(String id, String at_a_station_no, String first_name, String last_name,
                    Date dob, String country, String phone, String email, String role) {

        this.id = id;
        this.at_a_station_no = at_a_station_no;
        this.first_name = first_name;
        this.last_name = last_name;
        this.dob = dob;
        this.country = country;
        this.phone = phone;
        this.email = email;
        this.role = role;

    }

    public String getId() {
        return id;
    }

    public String getAt_a_station_no() {
        return at_a_station_no;
    }

    public String getFirst_name() {
        return first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public Date getDob() {
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

    public String getRole() {
        return role;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setAt_a_station_no(String at_a_station_no) {
        this.at_a_station_no = at_a_station_no;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public void setLast_name(String last_name) {
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

    public void setRole(String role) {
        this.role = role;
    }
}