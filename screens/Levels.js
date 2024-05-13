import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Levels = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.journey}>
        Journeys
      </Text>
      <View style={styles.row}>
        <View style={styles.box}>
          <TouchableOpacity onPress={() => navigation.navigate('CardsSwipeDemoPage')}>
            <Image style={styles.image} source={require('../assets/L-1.jpg')} />
            <Text style={styles.text}>MARVEL</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
        <TouchableOpacity onPress={() => navigation.navigate('CardsSwipeDemoPage')}>
          <Image style={styles.image} source={require('../assets/L-2.jpg')} />
          <Text style={styles.text}>Haunted-House</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
        <TouchableOpacity onPress={() => navigation.navigate('CardsSwipeDemoPage')}>
          <Image style={styles.image} source={require('../assets/L-3.jpg')} />
          <Text style={styles.text}>Adventure Island</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.box}>
        <TouchableOpacity onPress={() => navigation.navigate('CardsSwipeDemoPage')}>
          <Image style={styles.image} source={require('../assets/Hulk.jpg')} />
          <Text style={styles.text}>Level 4</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
        <TouchableOpacity>
          <Image style={styles.image} source={require('../assets/Venom.jpg')} />
          <Text style={styles.text}>Level 5</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
        <TouchableOpacity>
          <Image style={styles.image} source={require('../assets/Spiderman.jpg')} />
          <Text style={styles.text}>Level 6</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.box}>
        <TouchableOpacity>
          <Image style={styles.image} source={require('../assets/Groot.jpg')} />
          <Text style={styles.text}>Level 7</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
        <TouchableOpacity>
          <Image style={styles.image} source={require('../assets/Spiderman.jpg')} />
          <Text style={styles.text}>Level 8</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
        <TouchableOpacity>
          <Image style={styles.image} source={require('../assets/Thor.jpg')} />
          <Text style={styles.text}>Level 9</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  journey: {
    textShadowColor: 'red',
    textShadowOffset: { width: 2, height: 4 },
    textShadowRadius: 10, fontSize: 40, fontWeight: 'bold', justifyContent: 'center', textAlign: 'center', top: 40, color: 'white'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  box: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 11,
    top: 80,
    position: 'relative', 

  },
  text: {
    fontSize: 15,
    marginTop: 20,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 3 },
    textShadowRadius: 10,

  },
  image: {
    width: 125,
    height: 180,
    borderRadius: 10,
  },
});

export default Levels;
