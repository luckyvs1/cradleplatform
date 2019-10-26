package org.cradlePlatform.repository;

import org.cradlePlatform.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository<User, String> {
//    @Query("SELECT u " +
//            "FROM User u " +
//            "WHERE u.username = :username AND u.password = :password")
//    User findByLoginCredentials(@Param("username") String username, @Param("password") String password);
//    //User findByLoginCredentials(@Param("username") String username);
//
//
//    @Query("SELECT u " +
//            "FROM User u " +
//            "WHERE u.username = :username")
//    User findByUserName(@Param("username") String username);

    //Optional<User> findUserByUsername(String username);
    User findUserByUsername(String username);
    Optional<User> getById(String id);
}
