import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const CardsChoice = ({ type }) => {
  return (
    <View>
      <Text style={[styles.text, type === 'Nope' ? styles.nopeText : styles.likeText]}>
        {type}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    borderWidth: 3,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  nopeText: {
    color: 'red',
    borderColor: 'red',
  },
  likeText: {
    color: 'blue',
    borderColor: 'blue',
  },
});

export default CardsChoice;
