import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const starImageSrc = require('../assets/star.png');

const LevelComplete = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.title}>Level Complete</Text>
        <View style={styles.starContainer}>
          <Image source={starImageSrc} style={styles.starImage} />
          <Image source={starImageSrc} style={styles.starImage} />
          <Image source={starImageSrc} style={styles.starImage} />
        </View>
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreLabel}>Score:</Text>
          <Text style={styles.scoreValue}>5,200</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => console.log('Replay pressed')}>
          <Text style={styles.buttonText}>Replay</Text>
        </TouchableOpacity>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.navigationButton} onPress={() => navigation.navigate('LevelsPage')}>
            <Text style={styles.navigationButtonText}>{'<'} Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navigationButton} onPress={() => navigation.navigate('StorybookPage')}>
            <Text style={styles.navigationButtonText}>Next {'>'}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.navigationButtonFull} onPress={() => navigation.navigate('StorybookPage')}>
          <Text style={styles.navigationButtonText}>Access Your Storybook</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#FFFFE0',
    borderRadius: 20,
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
    width: '90%',
    maxWidth: 400,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  starContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  starImage: {
    width: 40,
    height: 40,
    marginHorizontal: 8,
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  scoreLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 5,
  },
  scoreValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00f',
  },
  button: {
    backgroundColor: '#00f',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  navigationButton: {
    backgroundColor: '#FFA500',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '48%',
  },
  navigationButtonFull: {
    backgroundColor: '#FFA500',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '100%',
  },
  navigationButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
});

export default LevelComplete;
