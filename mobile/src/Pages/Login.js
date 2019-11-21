import React, { useState } from 'react';
import { Platform, View, Text, TextInput, KeyboardAvoidingView, StyleSheet, AsyncStorage } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import LoginFailed from '../Components/LoginFailed';
import api from '../services/api';

export default function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginFailed, setLoginFailed] = useState(false);

    async function handleClick(){
        try{
            const response = await api.post('/login', {
                email,
                password
            });
            
            const authToken = response.data;
            console.log(authToken);
            await AsyncStorage.setItem('auth-token', authToken);
    
            navigation.navigate('Home');
        } catch(e){
            setLoginFailed(true);
        }
    }


    return (
        <KeyboardAvoidingView enable={Platform.OS === 'ios'} behavior="padding" style={styles.main}>
            <View style={styles.form}>
                <Text style={styles.login}>LOGIN</Text>
                <Text style={styles.label}>Email</Text>
                <TextInput
                value={email}
                onChangeText={text => setEmail(text)}
                style={styles.input}
                placeholder="exemplo@gmail.com"
                placeholderTextColor="#999"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                />

                <Text style={styles.label}>Senha</Text>
                <TextInput
                value={password}
                onChangeText={text => setPassword(text)}
                style={styles.input}
                placeholder="exemplo123"
                placeholderTextColor="#999"
                autoCorrect={false}
                />

                <TouchableOpacity
                style={styles.btn}
                onPress={handleClick}>
                    <Text style={styles.btntxt}>Entrar</Text>
                </TouchableOpacity>
                {loginFailed ? (
                    <LoginFailed />
                ) : null}
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    main:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6066d7'
    },

    form:{
        paddingHorizontal: 30,
        alignSelf: 'stretch'
    },

    login:{
        fontSize: 24,
        fontWeight: '200',
        color: '#e7ecd7',
        marginBottom: 20,
        alignSelf: 'center'
    },

    label:{
        fontSize: 12,
        color: '#e7ecd7',
        marginBottom: 6
    },

    input:{
        height: 40,
        borderWidth: 1,
        borderRadius: 2,
        paddingHorizontal: 20,
        color: '#ddd',
        borderColor: '#ddd',
        fontSize: 18,
        marginBottom: 20
    },

    btn:{
        height: 42,
        backgroundColor: '#e7ecd7',
        padding: 4,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 2,
        marginTop: 20,
    }
})