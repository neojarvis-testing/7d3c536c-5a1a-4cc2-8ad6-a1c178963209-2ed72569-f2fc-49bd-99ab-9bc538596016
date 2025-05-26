package main.java.com.examly.springappuser.service;

import com.examly.springappuser.model.User;
import com.examly.springappuser.repsitory.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BcryptPasswordEncoder;
import org.springframework.stereotype.service;
@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    private BcryptPasswordEncoder pwdEncoder = new BcryptPasswordEncoder();

    public User registerUser(main.java.com.examly.springappuser.model.User user){
        user.setPassword(pwdEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    public User loginUser(String email, String password){
        main.java.com.examly.springappuser.model.User user =  userRepository.findByEmail(email);
        if(user!= null && pwdEncoder.matches(password, user.getPassword())){
            return user;
        }
        return null;
    }
    
}
