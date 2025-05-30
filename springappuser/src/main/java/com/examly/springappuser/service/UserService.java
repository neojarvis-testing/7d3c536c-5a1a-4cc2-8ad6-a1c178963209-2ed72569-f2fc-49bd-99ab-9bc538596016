package com.examly.springappuser.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.examly.springappuser.model.User;
import com.examly.springappuser.repository.UserRepository;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    private BCryptPasswordEncoder pwdEncoder = new BCryptPasswordEncoder();

    public User registerUser(User user){
        user.setPassword(pwdEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    public User loginUser(String email, String password){
        User user =  userRepository.findByEmail(email);
        if(user!= null && pwdEncoder.matches(password, user.getPassword())){
            return user;
        }
        return null;
    }
}
