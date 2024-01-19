// FolderList.js
import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const FolderList = ({ folders }) => {
  const navigation = useNavigation();

  const handleFolderPress = (folderName) => {
    navigation.navigate('Folder', { folderName: folderName });
  };

  return (
    <ScrollView style={styles.folderList}>
      {folders.map((folder, index) => (
        <TouchableOpacity key={index} onPress={() => handleFolderPress(folder)} style={styles.folder}>
          <Ionicons name="folder" size={24} color="black" style={styles.icon} />
          <Text style={styles.folderText}>{folder}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  folderList: {
    flex: 1,
  },
  folder: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    marginVertical: 5,
  },
  icon: {
    marginRight: 10,
  },
  folderText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default FolderList;
