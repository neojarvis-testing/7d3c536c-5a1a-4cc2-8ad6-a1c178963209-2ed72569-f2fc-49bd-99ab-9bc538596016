package com.examly.springappuser.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.examly.springappuser.model.User;

public interface UserRepository extends JpaRepository<User,Integer>{
    User findByEmail(String email);
}
