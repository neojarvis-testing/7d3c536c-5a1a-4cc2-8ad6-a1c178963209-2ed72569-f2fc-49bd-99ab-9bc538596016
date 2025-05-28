package com.examly.springapplication.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="savings_plans")
public class SavingsPlan {
    
   @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int savingsPlanId;

    private String name;
    private double goalAmount;
    private int timeFrame;
    private String riskLevel;
    private String description;
    private String status;
    public int getSavingsPlanId() {
        return savingsPlanId;
    }
    public void setSavingsPlanId(int savingsPlanId) {
        this.savingsPlanId = savingsPlanId;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public double getGoalAmount() {
        return goalAmount;
    }
    public void setGoalAmount(double goalAmount) {
        this.goalAmount = goalAmount;
    }
    public int getTimeFrame() {
        return timeFrame;
    }
    public void setTimeFrame(int timeFrame) {
        this.timeFrame = timeFrame;
    }
    public String getRiskLevel() {
        return riskLevel;
    }
    public void setRiskLevel(String riskLevel) {
        this.riskLevel = riskLevel;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }

    

}
