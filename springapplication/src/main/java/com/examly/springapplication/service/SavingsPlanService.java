package com.examly.springapplication.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapplication.model.SavingsPlan;
import com.examly.springapplication.repository.SavingsPlanRepository;

@Service
public class SavingsPlanService {
    @Autowired
    private SavingsPlanRepository savingsPlanRepository;
    
    public SavingsPlan addSavingsPlan(SavingsPlan savingsPlan){
        return savingsPlanRepository.save(savingsPlan);
    }

    public List<SavingsPlan> getAllSavingsPlans(){
        return savingsPlanRepository.findAll();

    }

    public SavingsPlan getSavingsPlanById(int id){
        return savingsPlanRepository.findById(id).orElse(null);
    }

    public SavingsPlan updateSavingsPlan(int id, SavingsPlan savingsPlan){
        savingsPlan.setSavingsPlanId(id);
        return savingsPlanRepository.save(savingsPlan);
    }

}
