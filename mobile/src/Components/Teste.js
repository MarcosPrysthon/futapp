import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

// import { Container } from './styles';

export default function Teste() {
  return (
    <SafeAreaView style={styles.container}>
        <Text>TESTANDO</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    }
})
