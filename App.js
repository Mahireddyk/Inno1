// App.js
import React, { useState } from 'react';
import { StyleSheet, View, Alert, Text, SafeAreaView } from 'react-native';
import SearchBar from './ComponentsInno/SearchBar';
import FancyButton from './ComponentsInno/FancyButton';

const App = () => {
  const [folders, setFolders] = useState([]); // State to store the list of folders

  const handleButtonPress = () => {
    Alert.prompt('Create a New Folder', 'Enter folder name:', (folderName) => {
      if (folderName.trim()) {
        // Check if the folder already exists
        if (folders.some((folder) => folder === folderName)) {
          Alert.alert('Error', 'Folder already exists.');
        } else {
          // Create a new folder with the given name
          const newFolders = [...folders, folderName];
          setFolders(newFolders);
        }
      } else {
        Alert.alert('Error', 'Please enter a valid folder name.');
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Search bar at the header */}
      <View style={styles.header}>
        <SearchBar onChangeText={(text) => console.log('Search:', text)} placeholder="Type something..." />
      </View>

      {/* Button to add a new folder at the body */}
      <View style={styles.body}>
        <FancyButton onPress={handleButtonPress} title="Add Folder" />
      </View>

      {/* No folders are displayed in this version */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
