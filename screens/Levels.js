import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';

const Levels = ({ navigation }) => {
  const data = [
    { key: '1', image: require('../assets/Zombie.jpg'), text: 'Ghost-House' },
    { key: '2', image: require('../assets/Palace.jpg'), text: 'Palace' },
    { key: '3', image: require('../assets/L-3.jpg'), text: 'Adventure Island' },
    { key: '4', image: require('../assets/Carnival.jpg'), text: 'Carnival' },
    { key: '5', image: require('../assets/Cricket.jpg'), text: 'Cricket' },
    { key: '6', image: require('../assets/Punk-Rock.jpg'), text: 'Punk-Rock' },
    { key: '7', image: require('../assets/Haunted.jpg'), text: 'Haunted' },
    { key: '8', image: require('../assets/Punk-Rock.jpg'), text: 'Punk-Rock' },
    { key: '9', image: require('../assets/Thor.jpg'), text: 'Level 9' },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => {
      if (item.key === '1') {
        navigation.navigate('CardsSwipeDemoPage');
      }
    }}>
      <View style={styles.box}>
        <Image style={styles.image} source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.journey}>Journeys</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        numColumns={3}
        contentContainerStyle={styles.flatlistContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  journey: {
    textShadowColor: 'red',
    textShadowOffset: { width: 2, height: 4 },
    textShadowRadius: 10,
    fontSize: 40,
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlign: 'center',
    // top: 20,
    color: 'white'
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
    // padding: 10,
  },
  flatlistContent: {
    alignItems: 'center',
    // paddingTop: 20,
  },
  box: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 5,
  },
  text: {
    fontSize: 15,
    marginTop: 10,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 3 },
    textShadowRadius: 10,
  },
  image: {
    width: 125,
    height: 200,
    borderRadius: 10,
  },
});

export default Levels;
