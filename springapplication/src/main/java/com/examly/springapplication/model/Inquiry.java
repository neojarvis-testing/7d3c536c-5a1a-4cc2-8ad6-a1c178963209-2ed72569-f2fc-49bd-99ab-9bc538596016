package com.examly.springapplication.model;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="inquiries")
public class Inquiry {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int inquiryId;

    private String message;
    private int userId;
    private String replied;
    public int getInquiryId() {
        return inquiryId;
    }
    public void setInquiryId(int inquiryId) {
        this.inquiryId = inquiryId;
    }
    public String getMessage() {
        return message;
    }
    public void setMessage(String message) {
        this.message = message;
    }
    public int getUserId() {
        return userId;
    }
    public void setUserId(int userId) {
        this.userId = userId;
    }
    public String getReplied() {
        return replied;
    }
    public void setReplied(String replied) {
        this.replied = replied;
    }

    

}
