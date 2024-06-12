package com.tech.comfortable2.Drugsearch;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/drugs")
public class DrugController {
    @Autowired
    private DrugService drugService;
    @Autowired
    private UserDrugInfoService userDrugInfoService;

    @GetMapping("/search")
    public ResponseEntity<List<Drug>> searchDrugs(@RequestParam String name) {
        List<Drug> drugs = drugService.searchDrugs(name);
        return ResponseEntity.ok(drugs);
    }

    @PostMapping("/add")
    public ResponseEntity<Drug> addDrug(@RequestBody Drug drug) {
        Drug savedDrug = drugService.addDrug(drug);
        return ResponseEntity.ok(savedDrug);
    }

    @PostMapping("/user/add")
    public ResponseEntity<UserDrugInfo> addUserDrugInfo(@RequestParam Long userId, @RequestParam Long drugId) {
        UserDrugInfo userDrugInfo = userDrugInfoService.addUserDrugInfo(userId, drugId);
        return ResponseEntity.ok(userDrugInfo);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<UserDrugInfo>> getUserDrugInfos(@PathVariable Long userId) {
        List<UserDrugInfo> userDrugInfos = userDrugInfoService.getUserDrugInfos(userId);
        return ResponseEntity.ok(userDrugInfos);
    }

}
