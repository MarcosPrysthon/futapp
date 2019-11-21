import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LoginFailed() {
  return (
    <View style={styles.content}>
      <Text style={styles.txt}>Email ou senha inválidos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content:{
    marginTop: 5
  },

  txt:{
    color: '#ff2525'
  }
})