import React, { useRef, useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Camera } from 'expo-camera';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CameraScreen = ({ navigation, route }) => {
  const cameraRef = useRef(null);
  const [capturedPhotos, setCapturedPhotos] = useState([]);

  const handleCapturePress = async () => {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync();
        if (photo && photo.uri) {
          await AsyncStorage.setItem('capturedPhoto', JSON.stringify(photo));
          setCapturedPhotos((prevPhotos) => [...prevPhotos, photo]);
        } else {
          console.error('Error capturing photo:', photo);
        }
      } catch (error) {
        console.error('Error capturing photo:', error);
      }
    }
  };

  const handleFinishPress = () => {
    // Navigate to the FolderScreen with all captured photos
    navigation.navigate('Folder', { capturedPhotos, folder: route.params.folder });
  };

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={Camera.Constants.Type.back} ref={cameraRef}>
        <View style={styles.captureButtonContainer}>
          <TouchableOpacity style={styles.captureButton} onPress={handleCapturePress} />
          {/* Add a button to finish capturing and navigate to the FolderScreen */}
          <TouchableOpacity style={styles.finishButton} onPress={handleFinishPress}>
            <Text>Finish</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  captureButtonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center', // Adjust spacing as needed
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  captureButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 5,
    borderColor: '#fff',
    backgroundColor: 'transparent',
    marginBottom: 10,
  },
  finishButton: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
});

export default CameraScreen;
