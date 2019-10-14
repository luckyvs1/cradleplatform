package org.cradlePlatform.repository;

import org.cradlePlatform.model.Admin;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminRepository extends CrudRepository<Admin, String> {

}
