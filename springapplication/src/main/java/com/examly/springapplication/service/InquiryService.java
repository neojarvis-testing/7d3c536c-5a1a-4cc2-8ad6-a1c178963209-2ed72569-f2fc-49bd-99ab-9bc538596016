package com.examly.springapplication.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapplication.model.Inquiry;
import com.examly.springapplication.repository.InquiryRepository;

@Service
public class InquiryService {
    
    @Autowired
    private InquiryRepository inquiryRepository;

    public Inquiry addInquiry(Inquiry inquiry){
        return inquiryRepository.save(inquiry);
    }

    public List<Inquiry> getAllInquiries(){
        return inquiryRepository.findAll();
    }

    public Inquiry getInquiryById(int id){
        return inquiryRepository.findById(id).orElse(null);
    }
}
