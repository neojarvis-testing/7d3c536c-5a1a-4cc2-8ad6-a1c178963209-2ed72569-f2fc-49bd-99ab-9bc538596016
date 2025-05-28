package com.examly.springapplication.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.examly.springapplication.model.Inquiry;

public interface InquiryRepository extends JpaRepository<Inquiry,Integer>{
    
}
