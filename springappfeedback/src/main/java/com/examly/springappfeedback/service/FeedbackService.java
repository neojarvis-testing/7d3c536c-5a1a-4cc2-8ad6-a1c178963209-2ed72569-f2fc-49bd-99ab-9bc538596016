package com.examly.springappfeedback.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springappfeedback.model.Feedback;
import com.examly.springappfeedback.repository.FeedbackRepository;

@Service
public class FeedbackService {
    @Autowired
    private FeedbackRepository feedbackRepository;

    public Feedback addFeedback(Feedback feedback){
        return feedbackRepository.save(feedback);

    }

    public List<Feedback> getAllFeedbacks(){
        return feedbackRepository.findAll();
    }

    public List<Feedback> getFeedbackByUserId(int userId){
        return feedbackRepository.findAll().stream()
                    .filter(feedback-> feedback.getUserId()== userId)
                    .toList();
    }

}
