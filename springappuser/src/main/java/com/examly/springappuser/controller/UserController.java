package com.examly.springappuser.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springappuser.model.User;
import com.examly.springappuser.service.UserService; class UserController {
     @Autowired
    private UserService  userService;

    @PostMapping("/register")
    public ResponseEntity<User> registerUser(@RequestBody User user){
        User registeredUser = userService.registerUser(user);
        return new ResponseEntity<>(registeredUser, HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody User user){
        User loggedInUser = userService.loginUser(user.getEmail(), user.getPassword());
        if(loggedInUser!= null){
            return ResponseEntity.ok(loggedInUser);
        }
        return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Invalid credentials");
    }
}
