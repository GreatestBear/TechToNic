package com.tech.comfortable2.Drugsearch;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DrugService {
    @Autowired
    private DrugRepository drugRepository;

    public List<Drug> searchDrugs(String name) {
        return drugRepository.findByNameContainingIgnoreCase(name);
    }

    public Drug addDrug(Drug drug) {
        return drugRepository.save(drug);
    }

}
