import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import * as Speech from 'expo-speech';
import { useState } from 'react';

export default function App() {
  const [text, setText] = useState('');

  const speak = () => {
    if (text) {
      Speech.speak(text);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Text to Speech</Text>
      <TextInput 
        style={styles.input}
        placeholder="Enter text"
        onChangeText={setText}
        value={text}
      />
      <Button title="Press to hear text" onPress={speak} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ced4da',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: '#fff',
    width: '100%',
  },
});
