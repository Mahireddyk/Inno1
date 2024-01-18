// ComponentsInno/FancyButton.js
import React from 'react'; // Import React
import { TouchableOpacity, Text, StyleSheet } from 'react-native'; // Import necessary components

const FancyButton = ({ onPress, title }) => {
  // Render a TouchableOpacity for a touchable button
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      {/* Text inside the button */}
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

// Styles for the FancyButton component
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4CAF50', // Background color of the button
    paddingVertical: 15, // Vertical padding
    paddingHorizontal: 30, // Horizontal padding
    borderRadius: 8, // Border radius for rounded corners
    marginTop: 650, // Margin at the top
  },
  buttonText: {
    color: '#fff', // Text color
    fontSize: 16, // Font size of the text
    fontWeight: 'bold', // Bold font weight
    textAlign: 'center', // Center-align text
  },
});

export default FancyButton;
