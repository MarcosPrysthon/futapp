import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, Text, TextInput, KeyboardAvoidingView, StyleSheet, AsyncStorage } from 'react-native';
import jwt_decode from 'jwt-decode';
import api from '../services/api';

export default function Home() {
  const [matches, setMatches] = useState([]);
  const [userId, setUserId] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('auth-token').then(token => {
      const authToken = token;
      const decode = jwt_decode(authToken);
      const user_id = decode._id;
      await AsyncStorage.setItem('user_id', user_id);
      setUserId(user_id);
    });


  }, []);

  return (
    <SafeAreaView style={styles.main}>
      <FlatList>
        
      </FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6066d7'
  }
})