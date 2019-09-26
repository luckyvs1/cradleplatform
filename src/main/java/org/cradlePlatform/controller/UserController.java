/**
 * UserController handles the common functions available to all User types.
 * Does not handle account log-in or log-out.
 */
package org.cradlePlatform.controller;

import org.cradlePlatform.model.User;
import org.cradlePlatform.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;

public class UserController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping(path="/add")
    public @ResponseBody String addAUser(@RequestParam String at_a_station_no, @RequestParam String first_name,
                                         @RequestParam String last_name, @RequestParam Date dob,
                                         @RequestParam String country, @RequestParam String phone,
                                         @RequestParam String email, @RequestParam String role){
        //TODO: add stuff here
        return "Successfully saved";
    }
    @GetMapping(path="/getAll")
    public @ResponseBody Iterable<User> getAllUser() {
        return userRepository.findAll();
    }

}
