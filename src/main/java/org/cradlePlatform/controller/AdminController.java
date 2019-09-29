package org.cradlePlatform.controller;

import org.cradlePlatform.model.Admin;
import org.cradlePlatform.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


@Controller
@RequestMapping(path="admin") //This means URL's start with /admin (after Application path)
public class AdminController {
    @Autowired
    private AdminRepository adminRepository;

    @PostMapping(path="/addNewAdmin")
    public @ResponseBody String addNewAdmin (@RequestParam String id){
        Admin newAdmin = new Admin();
        newAdmin.setId(id);
        adminRepository.save(newAdmin);
        return "Saved Admin";
    }

    @GetMapping(path="/allAdmins")
    public @ResponseBody Iterable<Admin> getAllAdmins(){
        //This returns a JSON or XML with the users
        return adminRepository.findAll();
    }
}
