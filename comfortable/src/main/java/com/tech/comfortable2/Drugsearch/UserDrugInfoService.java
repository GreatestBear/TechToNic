package com.tech.comfortable2.Drugsearch;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserDrugInfoService {
    @Autowired
    private UserDrugInfoRepository userDrugInfoRepository;

    public UserDrugInfo addUserDrugInfo(Long userId, Long drugId) {
        UserDrugInfo userDrugInfo = new UserDrugInfo();
        userDrugInfo.setUserId(userId);
        userDrugInfo.setDrugId(drugId);
        return userDrugInfoRepository.save(userDrugInfo);
    }

    public List<UserDrugInfo> getUserDrugInfos(Long userId) {
        return userDrugInfoRepository.findByUserId(userId);
    }

}
