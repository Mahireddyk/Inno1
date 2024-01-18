// ComponentsInno/SearchBar.js
import React, { useState } from 'react'; // Import necessary dependencies
import { StyleSheet, TextInput, View, Animated } from 'react-native'; // Import React Native components
import { AntDesign } from '@expo/vector-icons'; // Import AntDesign icon from Expo

const SearchBar = ({ onChangeText, placeholder }) => {
  // State to manage the focus state of the input
  const [isFocused, setIsFocused] = useState(false);

  // Create an Animated value for handling animations
  const animatedValue = new Animated.Value(0);

  // Function to handle focus of the input
  const handleFocus = () => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
    setIsFocused(true);
  };

  // Function to handle blur of the input
  const handleBlur = () => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
    setIsFocused(false);
  };

  // Define animated styles for the underline effect
  const animatedStyle = {
    borderBottomWidth: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 2],
    }),
    borderBottomColor: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['#ccc', '#4CAF50'],
    }),
  };

  // Render the SearchBar component
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.inputContainer, animatedStyle]}>
        {/* Search icon */}
        <AntDesign name="search1" size={20} color={isFocused ? '#4CAF50' : '#888'} style={styles.icon} />
        {/* Input field */}
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={isFocused ? '#4CAF50' : '#888'}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </Animated.View>
    </View>
  );
};

// Styles for the SearchBar component
const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
  },
  input: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
    color: '#333',
  },
  icon: {
    marginRight: 10,
  },
});

export default SearchBar;
