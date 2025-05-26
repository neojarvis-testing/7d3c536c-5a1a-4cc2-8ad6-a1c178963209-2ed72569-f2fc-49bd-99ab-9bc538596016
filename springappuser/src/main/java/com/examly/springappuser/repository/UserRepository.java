package main.java.com.examly.springappuser.repository;

import com.examly.springappuser.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Integer> {
    User findByEmail(String email);
    
}
