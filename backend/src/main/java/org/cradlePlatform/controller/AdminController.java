/**
 * AdminController contains functions to retrieve and adds Admin-level users.
 */
package org.cradlePlatform.controller;

import org.cradlePlatform.model.Admin;
import org.cradlePlatform.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
public class AdminController {
    @Autowired
    private AdminRepository adminRepository;

    // GET mappings

    /**
     * Retrieve all Admins from the DB.
     * @return 200: a JSON of Admin ids or empty JSON otherwise
     */
    @GetMapping(path="/api/admins")
    public Iterable<Admin> getAllAdmins() {
        return adminRepository.findAll();
    }

    /**
     * Retrieve the Admin from the DB whose id matches the given id.
     * @param id User/Admin id to find Admin by
     * @return 200: a JSON with an Admin id if a matching Admin exists, or 'null' otherwise
     */
    @GetMapping(path="/api/admins/{id}")
    public Optional<Admin> getAdminById(@PathVariable(value = "id") String id) {
        return adminRepository.findById(id);
    }

    // POST mappings

    /**
     * Create a new Admin in the DB.
     * Admin must be created from an existing User id in the DB.
     * @param admin Admin object with id string that should match an existing User in DB.
     * @return 201: New Admin was saved in DB successfully.
     */
    @PostMapping(path="/api/admins")
    @ResponseStatus(code = HttpStatus.CREATED)
    public String addNewAdmin (@RequestBody Admin admin){
        Admin newAdmin = new Admin(admin.getId());
        adminRepository.save(newAdmin);
        return "Saved Admin";
    }


}
