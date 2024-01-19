// SearchBar.js
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const SearchBar = ({ onChangeText, placeholder }) => {
  return (
    <View style={styles.container}>
      <AntDesign name="search1" size={20} color="black" />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 5,
  },
  input: {
    flex: 1,
    marginLeft: 8,
  },
});

export default SearchBar;
