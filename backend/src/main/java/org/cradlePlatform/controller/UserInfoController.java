/**
 * UserInfoController contains functions to retrieve and add user information of all user types.
 * A user can be found by their ID.
 */
package org.cradlePlatform.controller;

import org.cradlePlatform.model.*;
import org.cradlePlatform.repository.AdminRepository;
import org.cradlePlatform.repository.HealthWorkerRepository;
import org.cradlePlatform.repository.UserInfoRepository;
import org.cradlePlatform.repository.VHTRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin(origins = {"http://cmpt373.csil.sfu.ca:8044", "http://localhost:3000"})
@RestController
public class UserInfoController {
    @Autowired
    private UserInfoRepository userInfoRepository;

    @Autowired
    private AdminRepository adminRepository;

    @Autowired
    private HealthWorkerRepository healthWorkerRepository;

    @Autowired
    private VHTRepository vhtRepository;

    @PostMapping(path="/api/user-information")
    @ResponseStatus(code = HttpStatus.CREATED)
    public String addUserInfo(@RequestBody UserInfo userInfo){
        userInfoRepository.save(userInfo);

        if (userInfo.getRole() == RoleType.Admin) {
            Admin admin = new Admin();
            admin.setId(userInfo.getId());
            adminRepository.save(admin);
        } else if (userInfo.getRole() == RoleType.Healthworker) {
            HealthWorker healthWorker = new HealthWorker();
            healthWorker.setId(userInfo.getId());
            healthWorkerRepository.save(healthWorker);
        }else if (userInfo.getRole() == RoleType.VHT) {
            VHT vht = new VHT();
            vht.setId(userInfo.getId());
            vhtRepository.save(vht);
        }

        return "Saved User Information";
    }

    @GetMapping(path="/api/user-information")
    public Iterable<UserInfo> getAllUserInfo(){
        return userInfoRepository.findAll();
    }

    @GetMapping(path="/api/user-information/{id}")
    public Optional<UserInfo> getUserInfoById(@PathVariable(value = "id") String userId){
        return userInfoRepository.findById(userId);
    }
}
