import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const starImageSrc = require('../assets/star.png');

const LevelComplete = ({navigation}) => {
  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <View style={styles.container}>
        <Text style={styles.title}>Level Complete</Text>
        <View style={styles.starContainer}>
          <Image source={starImageSrc} style={styles.starImage} />
          <Image source={starImageSrc} style={styles.starImage} />
          <Image source={starImageSrc} style={styles.starImage} />
        </View>
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreLabel}>Score: </Text>
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
          <View>
          <TouchableOpacity style={styles.navigationButton2} onPress={() => navigation.navigate('StorybookPage')}>
            <Text style={styles.navigationButtonText}>Access Your Storybook</Text>
          </TouchableOpacity>
          </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFE0',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'white',
    elevation: 50, 
    flex: 0.4,
    top: 260,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    bottom: 47
  },
  starContainer: {
    flexDirection: 'row',
    bottom: 40
  },
  starImage: {
    width: 40,
    height: 40,
    marginRight: 12,
  },
  scoreContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    bottom: 25
  },
  scoreLabel: {
    fontWeight: 'bold',
    marginRight: 5,
    fontSize: 20,
  },
  scoreValue: {
    color: '#00f',
    fontSize: 20,
    fontWeight: 'bold',

  },
  button: {
    backgroundColor: '#00f',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
    bottom: 30
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
  },
  navigationButton: {
    backgroundColor: '#FFA500',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '48%',
    bottom: 30
  },
  navigationButton2: {
    backgroundColor: '#FFA500',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    bottom: 10,
  },
  navigationButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
});

export default LevelComplete;
