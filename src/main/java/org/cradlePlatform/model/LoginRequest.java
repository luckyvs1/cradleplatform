package org.cradlePlatform.model;

public class LoginRequest {
    private String username;
    // TODO: Obviously we won't be storing passwords on the db in plaintext
    private String password;

    public LoginRequest() {
        this.username = "";
        this.password = "";
    }

    public LoginRequest(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }
}
