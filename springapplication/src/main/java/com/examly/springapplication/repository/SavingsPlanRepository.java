package com.examly.springapplication.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.examly.springapplication.model.SavingsPlan;

public interface SavingsPlanRepository extends JpaRepository<SavingsPlan,Integer>{

    
} 
