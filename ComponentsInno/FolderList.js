// FolderList.js
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const FolderList = ({ folders }) => {
  return (
    <ScrollView style={styles.folderList}>
      {folders.map((folder, index) => (
        <View key={index} style={styles.folder}>
          <Text style={styles.folderText}>{folder}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  folderList: {
    flex: 1,
  },
  folder: {
    padding: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    marginVertical: 5,
  },
  folderText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default FolderList;
