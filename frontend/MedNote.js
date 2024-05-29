import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, SafeAreaView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useMedications } from './MedContext'; // Context import
import HeaderComponent from './HeaderComponent';
import ButtonComponent_0 from './ButtonComponent_0';

const MedNote = ({ navigation }) => {
  const { medications, removeMedication } = useMedications(); // Context 사용
  const [windowWidth, setWindowWidth] = useState(Dimensions.get('window').width);

  useEffect(() => {
    const updateDimensions = ({ window }) => {
      setWindowWidth(window.width);
    };

    const subscription = Dimensions.addEventListener('change', updateDimensions);

    return () => {
      subscription?.remove();
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Main')}>
          <Ionicons name="arrow-back" size={30} color="black" />
        </TouchableOpacity>
        <HeaderComponent fontSizeMultiplier={0.06}> 복용중인 약 </HeaderComponent>
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
        <ButtonComponent_0
          title="이전"
          onPress={() => navigation.goBack()}
          style={{ width: windowWidth * 0.9 }}
        />
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
    fontSize: 24,
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
    marginBottom: 20,
  },
});

export default MedNote;
