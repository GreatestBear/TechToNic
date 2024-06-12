package com.tech.comfortable2.UserInfo;

import jakarta.persistence.*;

import javax.annotation.processing.Generated;
import java.util.List;

@Entity
public class UserInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String height;
    private String weight;
    private String age;
    private Boolean isSmoker;
    private String drinkFrequency;
    private String hasDisease;

    @ElementCollection
    private List<String> selectedConditions;

    @ElementCollection
    private List<String> selectedMedications;

    @ElementCollection
    private List<String> selectedAllergies;


}
