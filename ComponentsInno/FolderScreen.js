// FolderScreen.js
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import FancyButton from './FancyButton';

const FolderScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Content for the screen inside the folder */}
      <View style={styles.content}>
        <Text>Inside Folder</Text>
      </View>

      {/* Footer with a button */}
      <View style={styles.footer}>
        <FancyButton onPress={() => console.log('Take Photos button pressed')} title="Take Photos" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
});

export default FolderScreen;
