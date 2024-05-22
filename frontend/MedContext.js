import React, { createContext, useState, useContext } from 'react';

const MedContext = createContext();

export const MedProvider = ({ children }) => {
  const [medications, setMedications] = useState([]);

  const addMedication = (med) => {
    setMedications((prevMeds) => {
      if (prevMeds.some(item => item.itemSeq === med.itemSeq)) {
        return prevMeds; // 이미 존재하는 약물은 추가하지 않음
      }
      return [...prevMeds, { ...med, alarms: [] }]; // alarms 필드 추가
    });
  };

  const removeMedication = (itemSeq) => {
    setMedications((prevMeds) => prevMeds.filter(med => med.itemSeq !== itemSeq));
  };

  const addAlarm = (itemSeq, time) => {
    setMedications((prevMeds) => prevMeds.map(med => {
      if (med.itemSeq === itemSeq) {
        return { ...med, alarms: [...med.alarms, time] };
      }
      return med;
    }));
  };

  const removeAlarm = (itemSeq, time) => {
    setMedications((prevMeds) => prevMeds.map(med => {
      if (med.itemSeq === itemSeq) {
        return { ...med, alarms: med.alarms.filter(alarm => alarm !== time) };
      }
      return med;
    }));
  };

  return (
    <MedContext.Provider value={{ medications, addMedication, removeMedication, addAlarm, removeAlarm }}>
      {children}
    </MedContext.Provider>
  );
};

export const useMedications = () => useContext(MedContext);
