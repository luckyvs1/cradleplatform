package org.cradlePlatform.service;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.cradlePlatform.repository.UserRepository;
import org.cradlePlatform.model.User;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import java.util.Optional;

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
        // user.setRole(newUser.getRole());
        return userRepository.save(user);
    }

//    public Optional<User> authenticateUser (String username) {
//        return userRepository.findUserByUsername(username);
//    }

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
