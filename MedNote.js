import React from 'react';
import { StyleSheet, View, Text, FlatList, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useMedications } from './MedContext'; // Context import

const MedNote = ({ navigation }) => {
  const { medications, removeMedication } = useMedications(); // Context 사용

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('MainScreen')}>
          <Ionicons name="arrow-back" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>복용중인 약</Text>
      </View>
      <FlatList
        data={medications}
        keyExtractor={(item) => item.itemSeq.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => {
            console.log("Navigating to MedNote_1 with medication:", item);
            navigation.navigate('MedNote_1', { medication: item });
          }}>
            <View style={styles.medicationItem}>
              <Image
                source={{ uri: item.itemImage }}
                style={styles.image}
              />
              <View style={styles.textContainer}>
                <Text style={styles.medicationText}>{item.itemName}</Text>
                <Text style={styles.medicationSubText}>{item.itemDescription}</Text>
              </View>
              <TouchableOpacity onPress={() => removeMedication(item.itemSeq)}>
                <Ionicons name="close-circle" size={24} color="red" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>이전</Text>
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
  medicationItem: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
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
  buttonContainer: {
    padding: 10,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#5886FE',
    padding: 15,
    borderRadius: 5,
    width: '90%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default MedNote;
