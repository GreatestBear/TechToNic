import React, { useState, useCallback, useEffect, useRef } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const App = () => {
  const [messages, setMessages] = useState([]);
  const API_KEY = "sk-proj-uJsm1tDT8ZqAzXxDVpzBT3BlbkFJNtNtxc1DmB8JDHIYxRzY";
  const cache = useRef({});
  const debounceTimeout = useRef(null);

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
    ]);

    const loadCache = async () => {
      try {
        const cachedMessages = await AsyncStorage.getItem('cachedMessages');
        if (cachedMessages !== null) {
          cache.current = JSON.parse(cachedMessages);
        }
      } catch (error) {
        console.error("Failed to load cache", error);
      }
    };

    loadCache();
  }, []);

  const saveCache = async (cacheData) => {
    try {
      await AsyncStorage.setItem('cachedMessages', JSON.stringify(cacheData));
    } catch (error) {
      console.error("Failed to save cache", error);
    }
  };

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages));
    handleSend(messages);
  }, []);

  const handleSend = async (newMessages) => {
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    debounceTimeout.current = setTimeout(async () => {
      const message = newMessages[0].text;

      if (cache.current[message]) {
        setMessages(previousMessages => GiftedChat.append(previousMessages, {
          _id: previousMessages.length + 1,
          text: cache.current[message],
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'ChatGPT',
          },
        }));
        return;
      }

      try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Authorization": "Bearer " + API_KEY,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [{ role: "user", content: message }]
          })
        });

        const data = await response.json();
        console.log("API Response:", data);

        if (data.choices && data.choices.length > 0) {
          const botMessage = data.choices[0].message.content;

          cache.current[message] = botMessage;
          saveCache(cache.current);

          setMessages(previousMessages => GiftedChat.append(previousMessages, {
            _id: previousMessages.length + 1,
            text: botMessage,
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'ChatGPT',
            },
          }));
        }
      } catch (error) {
        console.error("API Error:", error);
      }
    }, 300); // 300ms debounce time
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
