import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, SafeAreaView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import PushNotification from 'react-native-push-notification';
import { useMedications } from './MedContext';

const MedNote_1 = ({ navigation, route }) => {
  const { medication } = route.params;
  const { addAlarm, removeAlarm } = useMedications();
  const [alarms, setAlarms] = useState(medication.alarms || []);
  const [showPicker, setShowPicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    console.log("Received medication in MedNote_1:", medication);
    setAlarms(medication.alarms || []);
  }, [medication]);

  const scheduleNotification = (time, medication) => {
    const [hour, minute] = time.split(':').map(Number);
    const notificationTime = new Date();
    notificationTime.setHours(hour, minute, 0);

    PushNotification.localNotificationSchedule({
      message: `It's time to take your medication: ${medication.itemName}`,
      date: notificationTime,
    });
  };

  const removeScheduledNotification = (time, medication) => {
    // 특정 알림을 제거하는 방법은 라이브러리 문서를 참조하여 구현합니다.
    // 예: PushNotification.cancelLocalNotifications({ id: `${medication.itemSeq}-${time}` });
  };

  const handleTimePick = (event, selectedDate) => {
    setShowPicker(false);
    if (selectedDate) {
      const time = selectedDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      addAlarm(medication.itemSeq, time);
      scheduleNotification(time, medication);
      setAlarms(prevAlarms => [...prevAlarms, time]);
    }
  };

  const handleRemoveAlarm = (time) => {
    removeAlarm(medication.itemSeq, time);
    removeScheduledNotification(time, medication);
    setAlarms(alarms.filter(alarm => alarm !== time));
  };

  const showTimePicker = () => {
    setShowPicker(true);
  };

  useEffect(() => {
    setAlarms(medication.alarms || []);
  }, [medication.alarms]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Main')}>
          <Ionicons name="arrow-back" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>알람 시간 설정</Text>
      </View>
      <Text style={styles.subtitle}>시간을 직접 설정하여 알람 받을 시간을 지정해 주세요</Text>
      <View style={styles.medicationInfo}>
        <Image
          source={{ uri: medication.itemImage }}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.medicationText}>{medication.itemName}</Text>
          <Text style={styles.medicationSubText}>{medication.itemDescription}</Text>
        </View>
      </View>
      <Text style={styles.sectionTitle}>알람 시간</Text>
      <FlatList
        data={alarms}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.alarmItem}>
            <Text style={styles.alarmText}>{item}</Text>
            <TouchableOpacity onPress={() => handleRemoveAlarm(item)}>
              <Ionicons name="close-circle" size={24} color="red" />
            </TouchableOpacity>
          </View>
        )}
      />
      {showPicker && (
        <DateTimePicker
          value={selectedDate}
          mode="time"
          display="default"
          onChange={handleTimePick}
        />
      )}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={showTimePicker}>
          <Text style={styles.buttonText}>알람 시간 추가</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>이전</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Main')}>
          <Text style={styles.buttonText}>메인 화면으로</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#57585B',
    textAlign: 'center',
    marginVertical: 10,
  },
  medicationInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  medicationText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  medicationSubText: {
    fontSize: 16,
    color: '#777',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#444444',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  alarmItem: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  alarmText: {
    fontSize: 18,
    color: '#000',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  button: {
    backgroundColor: '#5886FE',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default MedNote_1;
