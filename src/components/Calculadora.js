import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome5 } from '@expo/vector-icons';

const Calculadora = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const converter = () => {
    const result = parseFloat(celsius) * 1.8 + 32;
    setFahrenheit(result.toFixed(1));
  };

  return (
    <SafeAreaView View style={styles.container}>
      <ImageBackground
        style={styles.imagem}
        source={require('../../assets/fundo.png')}
      >
        <Text style={styles.titulo}>
          Conversor de Temperatura de Celsius para Fahrenheit
        </Text>

        <TextInput
          style={styles.textoInput}
          onChangeText={setCelsius}
          keyboardType="numeric"
          placeholder="Digite os graus em Celsius"
        />

        <Text style={styles.resultado}>RESULTADO:</Text>
        <Text style={styles.graus}>{fahrenheit}° F</Text>

        <TouchableOpacity
          style={styles.botao}
          onPress={converter}
          onChangeText={setCelsius}
        >
          <Text style={styles.textoBotão}>
            CONVERTER{' '}
            <FontAwesome5 name="temperature-low" size={24} color="white" />
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 830,
  },
  titulo: {
    paddingTop: 70,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'black',
  },
  textoInput: {
    width: '63%',
    height: 50,
    borderWidth: 2,
    borderColor: 'black',
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 18,
    alignSelf: 'center',
  },
  resultado: {
    fontSize: 18,
    marginTop: 55,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
  },
  graus: {
    fontSize: 55,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
  },
  icone: {
    fontSize: 55,
    textAlign: 'center',
    color: 'black',
  },

  botao: {
    padding: 10,
    width: 160,
    alignSelf: 'center',
    margin: 10,
    backgroundColor: 'black',
    borderRadius: 3,
  },
  textoBotão: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
  },
  imagem: { flex: 1 },
});

export default Calculadora;
