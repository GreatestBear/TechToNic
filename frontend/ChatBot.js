import React, { useState, useCallback, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { View, StyleSheet } from 'react-native';


const App = () => {
  const [messages, setMessages] = useState([]);
  const API_KEY = "sk-proj-ysp2Z2ErZRBOwIUwG0zJT3BlbkFJpfbgM5hq3pe8qktqdPUl";

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: '부모님의 든든한 건강 동반자 편안이에요. 사용자님 어떤 고민이 있으신가요?',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'ChatGPT',
        },
      },
    ])
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages));
    handleSend(messages);
  }, []);
  

  const handleSend = async (newMessages) => {
    const message = newMessages[0].text;
    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": "Bearer " + API_KEY,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: 'gpt-4',
          messages: [{ role: "user", content: message }]

        })
      });
      const data = await response.json();
      console.log("API Response:", data); // API 응답 로깅
      if (data.choices && data.choices.length > 0) {
        setMessages(previousMessages => GiftedChat.append(previousMessages, {
          _id: previousMessages.length + 1,
          text: data.choices[0].message.content,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'ChatGPT',
          },
        }));
      }
    } catch (error) {
      console.error("API Error:", error); // API 오류 로깅
    }
  };

  return (
    <View style={styles.container}>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});

export default App;
