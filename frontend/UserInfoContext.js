import React, { createContext, useState, useContext, useEffect } from 'react';

const UserInfoContext = createContext();

export const UserInfoProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState({
        height: '',
        weight: '',
        age: '',
        isSmoker: null,
        drinkFrequency: '',
        hasDisease: '',
        selectedConditions: [],
        selectedMedications: [],
        selectedAllergies: [],
    });

    const updateUserInfo = (key, value) => {
        setUserInfo(prev => ({ ...prev, [key]: value }));
    };

    // 상태가 변경될 때마다 콘솔에 로그 출력
    useEffect(() => {
        console.log('UserInfo updated:', userInfo);
    }, [userInfo]);

    return (
        <UserInfoContext.Provider value={{ userInfo, updateUserInfo }}>
            {children}
        </UserInfoContext.Provider>
    );
};

export const useUserInfo = () => useContext(UserInfoContext);
