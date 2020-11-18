/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

const App: () => React$Node = () => {
  const [numero, setNumero] = React.useState(0);
  const [nomeBotao, setNomeBotao] = React.useState('VAI');
  const [ultimoTempo, setUltimoTempo] = React.useState(null);
  let timer = null;

  function vai() {
    if (timer !== null) {
      // Pára o timer
      clearInterval(timer);
      timer = null;
      setNomeBotao('VAI');
    } else {
      // Começa girar o timer
      timer = setInterval(() => {
        setNumero(numero + 0.1);
      }, 100);

      setNomeBotao('PARAR');
    }
  }

  const limpar = () => {
    if (timer !== null) {
      // Pára o timer
      clearInterval(timer);
      timer = null;
    }
    setUltimoTempo(numero);
    setNumero(0);
    setNomeBotao('VAI');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./src/cronometro.png')}
        style={styles.cronometro}
      />

      <Text style={styles.timer}>{numero.toFixed(1)}</Text>

      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btn} onPress={vai}>
          <Text style={styles.btnTexto}>{nomeBotao}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={limpar}>
          <Text style={styles.btnTexto}>LIMPAR</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.areaUltimoTempo}>
        <Text style={styles.textoUltimoTempo}>
          Último tempo: {ultimoTempo && ultimoTempo.toFixed(1)}
          {ultimoTempo ? 's' : ''}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef',
  },
  timer: {
    marginTop: -160,
    color: '#fff',
    fontSize: 65,
    fontWeight: 'bold',
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 70,
    height: 40,
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 40,
    margin: 17,
    borderRadius: 9,
  },
  btnTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef',
  },
  areaUltimoTempo: {
    marginTop: 40,
  },
  textoUltimoTempo: {
    fontSize: 25,
    fontStyle: 'italic',
    color: '#fff',
  },
});

export default App;
