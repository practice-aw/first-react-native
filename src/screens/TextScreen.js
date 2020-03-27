import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

// State in React is used to track any variable that is expected to change over time
// We never want parent element(TextScreen) to inspect element/property of child(TextInput)

const TextScreen = () => {
  const [name, setName] = useState('');

  return (
    <View>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newText) => setName(newText) }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1
  }
});

export default TextScreen;
