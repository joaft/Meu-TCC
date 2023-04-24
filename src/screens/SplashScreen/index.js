import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import logoImage from '../../../assets/logo.png';

export const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo}source = {logoImage}/>
      <Text style={styles.titleText}>Bem vindo ao E-story, a melhor plataforma para estudar assuntos históricos.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 100,
    width: 100,
  },
  titleText: {
    color: '#010101',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop:50,
  }

});