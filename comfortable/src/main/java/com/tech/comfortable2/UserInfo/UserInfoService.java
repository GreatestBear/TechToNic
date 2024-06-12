package com.tech.comfortable2.UserInfo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserInfoService {

    @Autowired
    private UserInfoRepository userInfoRepository;

    public UserInfo saveUserInfo(UserInfo userInfo){
        return userInfoRepository.save(userInfo);
    }
}
