import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, FlatList, Text, SafeAreaView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { XMLParser } from 'fast-xml-parser';
import { useMedications } from './MedContext'; // Context import

const AddMed_1 = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const { medications, addMedication } = useMedications(); // Context 사용

  const API_KEY = "8RyphMMsmI61TvXAoVjmI1npjlL0y7pRobz54oDEZjm8uYkdvVaXAXBUNBrNVsErukBQEa8eL86/9McxvxLHCQ==";
  const BASE_URL = "http://apis.data.go.kr/1471000/DrbEasyDrugInfoService/getDrbEasyDrugList";

  const fetchMedicines = async () => {
    try {
      const url = `${BASE_URL}?ServiceKey=${encodeURIComponent(API_KEY)}&itemName=${encodeURIComponent(searchTerm)}`;
      const response = await fetch(url);
      const responseText = await response.text();
      const parser = new XMLParser();
      const jsonObj = parser.parse(responseText);

      if (jsonObj.response.body.items) {
        const simplifiedResults = jsonObj.response.body.items.item.map(item => ({
          itemSeq: item.itemSeq,
          itemName: item.itemName,
          itemImage: item.itemImage || 'https://raw.githubusercontent.com/GreatestBear/TechToNic/test1/wiki_images/No_Image.png'
        }));
        setResults(simplifiedResults);
      } else {
        setResults([]);
      }
    } catch (error) {
      console.error('Error fetching data: ', error);
      setResults([]);
    }
  };

  useEffect(() => {
    if (searchTerm) {
      fetchMedicines();
    }
  }, [searchTerm]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          placeholder="약 성분 혹은 이름 검색"
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
        <TouchableOpacity onPress={fetchMedicines}>
          <Ionicons name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={results}
        keyExtractor={(item) => item.itemSeq.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => addMedication(item)}>
            <View style={styles.itemContainer}>
              <Image
                source={{ uri: item.itemImage }}
                style={styles.image}
                resizeMode="contain"
              />
              <Text style={styles.itemText}>{item.itemName}</Text>
              <Ionicons name={medications.some(m => m.itemSeq === item.itemSeq) ? "checkmark-circle" : "ellipse-outline"} size={24} color="green" />
            </View>
          </TouchableOpacity>
        )}
      />
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('AddMed_0')}>
          <Text style={styles.footerButtonText}>이전</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('AddMed_2')}>
          <Text style={styles.footerButtonText}>다음</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  searchInput: {
    flex: 1,
    padding: 10,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemText: {
    flex: 1,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  footerButton: {
    padding: 10,
    backgroundColor: '#5886FE',
    borderRadius: 5,
  },
  footerButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default AddMed_1;
