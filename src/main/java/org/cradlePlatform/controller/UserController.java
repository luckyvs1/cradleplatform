/**
 * UserController handles the common functions available to all User types.
 * Does not handle account log-in or log-out.
 */
package org.cradlePlatform.controller;

import org.cradlePlatform.model.User;
import org.cradlePlatform.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;

@Controller
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping(path="/user")
    public @ResponseBody String addUser(@RequestParam String username,
                                        @RequestParam String password){
        User newUser = new User();
        newUser.setUsername(username);
        newUser.setPassword(password);

        userRepository.save(newUser);

        return "Saved New User";
    }

    @GetMapping(path="/user/all")
    public @ResponseBody Iterable<User> getAllUser() {

        User newUser = new User();
        newUser.setUsername("test");
        newUser.setPassword("test123");
        userRepository.save(newUser);

        return userRepository.findAll();
    }

    @GetMapping(path="/user/{id}")
    public @ResponseBody
    Optional<User> getUserById(@PathVariable(value = "id") String referrer_id){
        return userRepository.findById(referrer_id);
    }
}
