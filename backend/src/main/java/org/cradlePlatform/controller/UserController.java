/**
 * UserController handles the common functions available to all User types.
 * Does not handle account log-in or log-out.
 */
package org.cradlePlatform.controller;

import org.cradlePlatform.model.User;
import org.cradlePlatform.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;

@CrossOrigin(origins = { "http://localhost:3000"})
@Controller
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping(path="/api/users")
    public @ResponseBody String addUser(@RequestBody User user){
        User newUser = new User();
        newUser.setUsername(user.getUsername());
        newUser.setPassword(user.getPassword());

        userRepository.save(newUser);

        return "Saved New User";
    }

    @GetMapping(path="/api/users")
    public @ResponseBody Iterable<User> getAllUser() {
        return userRepository.findAll();
    }

    @GetMapping("/api/login")
    @ResponseStatus(HttpStatus.OK)
    public @ResponseBody Boolean logIn(@RequestParam String username,
                                       @RequestParam String password) {
        User account = userRepository.findUserByUsernameAndPassword(username, password);

        if (account != null) {
            return true;
        }

        return false;
    }

    @GetMapping(path="/api/users/{id}")
    public @ResponseBody Optional<User> getUserById(@PathVariable(value = "id") String referrer_id){
        return userRepository.findById(referrer_id);
    }
}
