import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const { width } = Dimensions.get('window');
const iconSize = width * 0.3; // 아이콘 크기를 화면 너비의 15%로 설정

const MainScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.section}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ChatBot')}>
                    <Image source={require('./assets/pyeon.png')} style={styles.icon} />
                    <View style={styles.textContainer}>
                        <Text style={styles.header}>편안이에게 물어보세요</Text>
                        <Text style={styles.description}>건강 및 의료 관련 질문에 모두 답변해드립니다.</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.section}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddMed_0')}>
                    <Image source={require('./assets/Med.png')} style={styles.icon} />
                    <View style={styles.textContainer}>
                        <Text style={styles.header}>약 추가하기</Text>
                        <Text style={styles.description}>복용 중인 약을 추가하고, 약에 대한 정보를 확인해보세요.</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.section}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        console.log("Navigating to MedNote");
                        try {
                            navigation.navigate('MedNote', { medications: [] }); // 기본값으로 비어있는 배열 전달
                        } catch (error) {
                            console.error("Navigation error:", error);
                        }
                    }}
                >
                    <Image source={require('./assets/Note.png')} style={styles.icon} />
                    <View style={styles.textContainer}>
                        <Text style={styles.header}>약 복용시간 알림이</Text>
                        <Text style={styles.description}>잊어먹지 않도록 복용시간에 알려드릴게요.</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.section}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Monitoring')}>
                    <Image source={require('./assets/Monitor.png')} style={styles.icon} />
                    <View style={styles.textContainer}>
                        <Text style={styles.header}>건강 정보 모니터링</Text>
                        <Text style={styles.description}>건강 정보를 모니터링 해보세요.</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    section: {
        width: width * 0.9, // 섹션의 너비를 화면의 90%로 설정
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 20, // 더 둥글게 표현
        width: '100%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    icon: {
        width: iconSize,
        height: iconSize,
        marginRight: 15,
    },
    textContainer: {
        flex: 1,
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
    }
});

export default MainScreen;
