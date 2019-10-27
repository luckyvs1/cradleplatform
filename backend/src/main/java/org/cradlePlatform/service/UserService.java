/**
 * UserService handles the common helpers required to encrpyt and de-crypt passwords
 * and hand back a valid token on successful authorization.
 */

package org.cradlePlatform.service;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.cradlePlatform.repository.UserRepository;
import org.cradlePlatform.model.User;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public User saveUser (User newUser){
        User user = new User();
        user.setUsername(newUser.getUsername());
        user.setPassword(bCryptPasswordEncoder.encode(newUser.getPassword()));
        return userRepository.save(user);
    }

    /*
        TODO: getResponseToken is mocked to
        provide a sample response with requested format
        but with valid userId
     */
    public String getResponseToken (String userId) {
        return String.format("{" +
                "\"access_token\":\"2YomnFZEjfjklsadjkwpAA\"," +
                "\"token_type\":\"bearer\"," +
                "\"expires_in\":3600," +
                "\"refresh_token\":\"nGzv3JORFQXG3x21KW1a\"," +
                "   \"id\":\"%s\"" +
                "}", userId);
    }

    public boolean authenticateUser (String username, String password) {
        boolean isValidCredentials = false;
        User user = new User();
        user = userRepository.findUserByUsername(username);

        if (user != null) {
            isValidCredentials = bCryptPasswordEncoder.matches(password, user.getPassword());;
        }

        return isValidCredentials;
    }
}
