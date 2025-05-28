package com.examly.springappfeedback.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springappfeedback.model.Feedback;
import com.examly.springappfeedback.service.FeedbackService;
import java.util.List;
@RestController
@RequestMapping("/api/feedback")
public class FeedbackController {
    

    @Autowired
    private FeedbackService feedbackService;

    @PostMapping
    public ResponseEntity<Feedback> addFeedback(@RequestBody Feedback feedback){
        Feedback crFeedback = feedbackService.addFeedback(feedback);
        return new ResponseEntity<>(crFeedback, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Feedback>> getAllFeedback(){
        List<Feedback> feedbacks= feedbackService.getAllFeedbacks();
        return ResponseEntity.ok(feedbacks);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Feedback>> getFeedbackByUserId(@PathVariable int userId){
        List<Feedback> feedbacks = feedbackService.getFeedbackByUserId(userId);
        return ResponseEntity.ok(feedbacks);
    }
}