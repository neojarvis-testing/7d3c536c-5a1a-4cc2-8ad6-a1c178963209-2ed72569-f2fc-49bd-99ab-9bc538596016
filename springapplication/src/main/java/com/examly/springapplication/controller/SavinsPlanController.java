package com.examly.springapplication.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapplication.model.SavingsPlan;
import com.examly.springapplication.service.SavingsPlanService;

@RestController
@RequestMapping("/api/savingsplans")
public class SavinsPlanController {
    
    @Autowired
    private SavingsPlanService savingsPlanService;

    @PostMapping
    public ResponseEntity<SavingsPlan> addSavingsPlan(@RequestBody SavingsPlan savingsPlan){
        SavingsPlan createdPlan = savingsPlanService.addSavingsPlan(savingsPlan);
        return new ResponseEntity<>(createdPlan, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<SavingsPlan>> getAllSavingsPlans(){
        List<SavingsPlan> plans = savingsPlanService.getAllSavingsPlans();
        return ResponseEntity.ok(plans);
    } 


    @GetMapping("/{id}")
    public ResponseEntity<SavingsPlan> getSavingsPlanById(@PathVariable int id){
        SavingsPlan plan = savingsPlanService.getSavingsPlanById(id);
        return plan != null? ResponseEntity.ok(plan) : ResponseEntity.notFound().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<SavingsPlan> ipdateSavingsPlan(@PathVariable int id, @RequestBody SavingsPlan savingsPlan){
        SavingsPlan updatedPlan = savingsPlanService.updateSavingsPlan(id,savingsPlan);
        return ResponseEntity.ok(updatedPlan);
    }

}
