import React, { useState, useRef, useEffect } from 'react';
import { Button, Image, View, StyleSheet, TouchableOpacity, Alert, Text } from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import { Camera } from 'expo-camera';
import { useNavigation, useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FlatList } from 'react-native';
import ImageScreen from './ImageScreen';
const FolderScreen = () => {
  const [folders, setFolders] = useState({ default: [] }); // Holds images for each folder
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    if (route.params?.capturedPhotos) {
      console.log('Captured photos received:', route.params.capturedPhotos);
      setFolders(prevFolders => ({
        ...prevFolders,
        [route.params.folder]: [...prevFolders[route.params.folder], ...route.params.capturedPhotos],
      }));
    }
  }, [route.params?.capturedPhotos]);
  

  const handleTakePhotosPress = async (folder) => {
    const { status: cameraStatus } = await MediaLibrary.requestPermissionsAsync();

    if (cameraStatus === 'granted') {
      navigation.navigate('CameraScreen', { folder: folder });
    } else {
      Alert.alert('Error', 'Camera permission not granted');
    }
  };

  const handleImagePress = (imageUri) => {
    navigation.navigate('ImageScreen', { uri: imageUri });
  };

  return (
    <View style={styles.container}>
      {Object.keys(folders).map((folder) => (
        <View key={folder} style={styles.folder}>
          <Button title={`Take Photos`} onPress={() => handleTakePhotosPress(folder)} />
          <FlatList
            data={folders[folder]}
            keyExtractor={(item, index) => index.toString()}
            numColumns={3} // Set the number of columns for your grid
            renderItem={({ item: image }) => (
              <TouchableOpacity onPress={() => handleImagePress(image.uri)}>
                {typeof image.uri === 'string' && <Image source={{ uri: image.uri }} style={styles.thumbnail} />}
              </TouchableOpacity>
            )}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  folderContainer: {
    flex: 1,
    width: '100%',
    padding: 10,
  },
  folder: {
    marginBottom: 20,
  },
  thumbnail: {
    width: 100,
    height: 100,
    margin: 5,
  },
});

export default FolderScreen;