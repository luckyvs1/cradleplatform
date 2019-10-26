package org.cradlePlatform.repository;

import org.cradlePlatform.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

@Repository
public interface UserRepository extends CrudRepository<User, String> {
    @Query("SELECT u FROM User u WHERE u.username = :username and u.password = :password")
    User findByLoginCredentials(@Param("username") String username, @Param("password") String password);
}
