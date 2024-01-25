// App.js
import React, { useState } from 'react';
import { StyleSheet, View, Alert, SafeAreaView } from 'react-native';
import SearchBar from './ComponentsInno/SearchBar';
import FancyButton from './ComponentsInno/FancyButton';
import FolderList from './ComponentsInno/FolderList';
import FolderScreen from './ComponentsInno/FolderScreen';
import CameraScreen from './ComponentsInno/CameraScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  const [folders, setFolders] = useState([]);

  const handleButtonPress = () => {
    Alert.prompt('Create a New Folder', 'Enter folder name:', (folderName) => {
      if (folderName.trim()) {
        if (folders.some((folder) => folder === folderName)) {
          Alert.alert('Error', 'Folder already exists.');
        } else {
          const newFolders = [...folders, folderName];
          setFolders(newFolders);
        }
      } else {
        Alert.alert('Error', 'Please enter a valid folder name.');
      }
    });
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{
            title: 'Home',
            headerStyle: {
              backgroundColor: '#4CAF50',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          {() => (
            <SafeAreaView style={styles.container}>
              <View style={styles.header}>
                <SearchBar onChangeText={(text) => console.log('Search:', text)} placeholder="Type something..." />
              </View>
              <FolderList folders={folders} />
              <View style={styles.footer}>
                <FancyButton onPress={handleButtonPress} title="Add Job Folder" />
              </View>
            </SafeAreaView>
          )}
        </Stack.Screen>
        <Stack.Screen
          name="Folder"
          component={FolderScreen}
        />
        <Stack.Screen
  name="CameraScreen"
  component={CameraScreen}
/>
      </Stack.Navigator>
    </NavigationContainer>
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
  footer: {
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
});

export default App;
