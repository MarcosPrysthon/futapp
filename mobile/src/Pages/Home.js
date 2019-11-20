import React from 'react';
import { View, SafeAreaView, Text, TextInput, KeyboardAvoidingView, StyleSheet, AsyncStorage } from 'react-native';

// import { Container } from './styles';

export default function Home() {
  return (
    <SafeAreaView style={styles.main}>
      <Text>Home</Text>
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