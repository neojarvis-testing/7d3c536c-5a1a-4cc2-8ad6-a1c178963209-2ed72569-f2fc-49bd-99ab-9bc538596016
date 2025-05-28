package com.examly.springappfeedback.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.examly.springappfeedback.model.Feedback;

public interface FeedbackRepository  extends JpaRepository<Feedback,Integer>{
    
}
