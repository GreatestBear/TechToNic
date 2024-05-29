import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, FlatList, Text, SafeAreaView, Image, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { XMLParser } from 'fast-xml-parser';
import { useMedications } from './MedContext'; // Context import
import HeaderComponent from './HeaderComponent';
import ButtonComponent_0 from './ButtonComponent_0';


const AddMed_1 = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [windowWidth, setWindowWidth] = useState(Dimensions.get('window').width);
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

  useEffect(() => {
    const updateDimensions = ({ window }) => {
      setWindowWidth(window.width);
    };

    const subscription = Dimensions.addEventListener('change', updateDimensions);

    return () => {
      subscription?.remove();
    };
  }, []);

  const handlePrevious = () => {
    navigation.navigate('AddMed_0');
  };

  const handleNext = () => {
    navigation.navigate('AddMed_2');
  };

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
        style={styles.flatList}
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
      <View style={styles.navContainer}>
        <ButtonComponent_0 title="이전" onPress={handlePrevious} style={{ width: windowWidth * 0.45 }} />
        <ButtonComponent_0 title="다음" onPress={handleNext} style={{ width: windowWidth * 0.45 }} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
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
    borderBottomColor: '#fff',
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
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff',
  },
  flatList: {
    backgroundColor: '#FCFCFC', 
  },
});

export default AddMed_1;