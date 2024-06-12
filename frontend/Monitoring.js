import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { useUserInfo } from './UserInfoContext';
import ButtonComponent_0 from './ButtonComponent_0';

const Monitoring = () => {
    const { userInfo } = useUserInfo();   
    const {
        height,
        weight,
        age,
        isSmoker,
        drinkFrequency,
        hasDisease,
        selectedConditions,
        selectedMedications,
        selectedAllergies
    } = userInfo;

    return (
        <ScrollView contentContainerStyle={styles.monitoringContainer}>
            <Text style={styles.header}>내 건강 데이터</Text>
            <View style={styles.row}>
                <Text style={styles.subHeader}>건강 설문</Text>
                <Text style={styles.date}>{new Date().toLocaleDateString()} 기준</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionHeader}>신체정보</Text>
                <View style={styles.infoRow}>
                    <Text style={styles.infotext}>{height ? `${height} cm` : '신장 정보 없음'}</Text>
                    <Text style={styles.infotext}>{weight ? `${weight} kg` : '체중 정보 없음'}</Text>
                    <Text style={styles.infotext}>{age ? `만 ${age}세` : '나이 정보 없음'}</Text>
                </View>
            </View>

            <View style={styles.divider} />

            <View style={styles.section}>
                <Text style={styles.sectionHeader}>질환</Text>
                {selectedConditions.length > 0 ? (
                    <View style={styles.tagContainer}>
                        {selectedConditions.map((condition, index) => (
                            <View key={index} style={styles.tag}>
                                <Text style={styles.tagText}>{condition}</Text>
                            </View>
                        ))}
                    </View>
                ) : (
                    <Text style={styles.infoText}>질환 정보 없음</Text>
                )}
            </View>

            <View style={styles.divider} />

            <View style={styles.section}>
                <Text style={styles.sectionHeader}>복용 중인 약</Text>
                {selectedMedications.length > 0 ? (
                    <View style={styles.tagContainer}>
                        {selectedMedications.map((medication, index) => (
                            <View key={index} style={styles.tag}>
                                <Text style={styles.tagText}>{medication}</Text>
                            </View>
                        ))}
                    </View>
                ) : (
                    <Text style={styles.infoText}>복용 중인 약 정보 없음</Text>
                )}
            </View>

            <View style={styles.divider} />

            <View style={styles.section}>
                <Text style={styles.sectionHeader}>알레르기</Text>
                {selectedAllergies.length > 0 ? (
                    <View style={styles.tagContainer}>
                        {selectedAllergies.map((allergy, index) => (
                            <View key={index} style={styles.tag}>
                                <Text style={styles.tagText}>{allergy}</Text>
                            </View>
                        ))}
                    </View>
                ) : (
                    <Text style={styles.infoText}>알레르기 정보 없음</Text>
                )}
            </View>

            <View style={styles.divider} />

            <View style={styles.footer}>
                <ButtonComponent_0 
                    title="자세히 보기" 
                    onPress={() => alert('자세히 보기 클릭됨')} 
                    style={{ width: Dimensions.get('window').width * 0.4 }} 
                />
                <ButtonComponent_0 
                    title="정보 수정하기" 
                    onPress={() => alert('정보 수정하기 클릭됨')} 
                    style={{ width: Dimensions.get('window').width * 0.4 }} 
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    monitoringContainer: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'left',
    },
    subHeader: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'left',
    },
    date: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: 'right',
    },
    section: {
        marginBottom: 20,
    },
    sectionHeader: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
  },
    infoText: {
        fontSize: 16,
        marginBottom: 5,
    },
    infotext: {
      fontSize: 22,
      marginBottom: 5,
      fontWeight: 'bold',
    },
    tagContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    tag: {
        backgroundColor: '#F3F4F6',
        padding: 10,
        borderRadius: 20,
        margin: 5,
    },
    tagText: {
        fontSize: 16,
    },
    divider: {
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        marginVertical: 10,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
});

export default Monitoring;
