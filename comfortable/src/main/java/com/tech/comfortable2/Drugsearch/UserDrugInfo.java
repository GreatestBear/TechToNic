package com.tech.comfortable2.Drugsearch;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class UserDrugInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long userId;
    private Long drugId;

    public void setUserId(Long userId){
        this.userId = userId;
    }

    public void setDrugId(Long drugId){
        this.drugId = drugId;
    }
}
