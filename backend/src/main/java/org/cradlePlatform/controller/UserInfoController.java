/**
 * UserInfoController contains functions to retrieve and add user information of all user types.
 * A user can be found by their ID.
 */
package org.cradlePlatform.controller;

import org.cradlePlatform.model.RoleType;
import org.cradlePlatform.model.UserInfo;
import org.cradlePlatform.repository.UserInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.Optional;
@CrossOrigin(origins = { "http://localhost:3000"})
@RestController
public class UserInfoController {
    @Autowired
    private UserInfoRepository userInfoRepository;

    @PostMapping(path="/api/user-information")
    public @ResponseBody String addUserInfo(@RequestParam String id,
                                            @RequestParam String attestationNumber,
                                            @RequestParam String firstName,
                                            @RequestParam String lastName,
                                            @RequestParam Date dateOfBirth,
                                            @RequestParam String country,
                                            @RequestParam String phone,
                                            @RequestParam String email,
                                            @RequestParam RoleType role){
        UserInfo newUserInfo = new UserInfo();
        newUserInfo.setId(id);
        newUserInfo.setAttestationNumber(attestationNumber);
        newUserInfo.setFirstName(firstName);
        newUserInfo.setLastName(lastName);
        newUserInfo.setDateOfBirth(dateOfBirth);
        newUserInfo.setCountry(country);
        newUserInfo.setPhone(phone);
        newUserInfo.setEmail(email);
        newUserInfo.setRole(role);

        userInfoRepository.save(newUserInfo);

        return "Saved user Info";
    }

    @GetMapping(path="/api/user-information")
    public @ResponseBody Iterable<UserInfo> getAllUserInfo(){
        return userInfoRepository.findAll();
    }

    @GetMapping(path="/api/user-information/{id}")
    public @ResponseBody Optional<UserInfo> getUserInfoById(@PathVariable(value = "id") String userId){
        return userInfoRepository.findById(userId);
    }
}
