import { View, Animated, Image, StyleSheet, PanResponder } from 'react-native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Cards from '../components/Cards';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CardsSwipeDemo = ({ navigation }) => {
  const [data, setData] = useState([
    { image: require('../assets/Haunted.jpg'), id: 1, title: 'Haunted-House', about: 'Wlcm in the Haunted House' },
    { image: require('../assets/HH-1.jpg'), id: 2, title: 'Entrance', about: 'This is the next card.' },
    { image: require('../assets/HH-2.jpg'), id: 3, title: 'Inner-Area', about: 'This is the inner area.' },
    { image: require('../assets/HH-3.jpg'), id: 4, title: 'Common-Area', about: 'This is the common area.' },
    { image: require('../assets/Zombie.jpg'), id: 5, title: 'Zombie-Land', about: 'Zombie-Land' },
    { image: require('../assets/Punk-Rock.jpg'), id: 6, title: 'Punk-Rock', about: 'Punk-Rock.' },
    { image: require('../assets/Carnival.jpg'), id: 7, title: 'Carnival', about: 'Carnival.' },
    { image: require('../assets/Haunted.jpg'), id: 8, title: 'Haunted House', about: 'Haunted-House.' },
  ]);

  useEffect(() => {
    if (data.length === 0) {
      navigation.navigate('LevelCompletePage');
    }
  }, [data, navigation]);

  const swipe = useRef(new Animated.ValueXY()).current;
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, { dx, dy }) => {
      swipe.setValue({ x: dx, y: dy });
    },
    onPanResponderRelease: (_, { dx, dy }) => {
      const direction = Math.sign(dx);
      const isActionActive = Math.abs(dx) > 180;
      if (isActionActive) {
        Animated.timing(swipe, {
          toValue: { x: 600 * direction, y: dy },
          useNativeDriver: true,
          duration: 500,
        }).start(removeCard);
      } else {
        Animated.spring(swipe, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: true,
          friction: 6,
        }).start();
      }
    },
  });

  const removeCard = useCallback(() => {
    setData((prevState) => prevState.slice(1));
    swipe.setValue({ x: 0, y: 0 });
  }, [swipe]);

  const handleSelection = useCallback(
    (direction) => {
      Animated.timing(swipe, {
        toValue: { x: direction * 600, y: 0 },
        useNativeDriver: true,
        duration: 500,
      }).start(removeCard);
    },
    [removeCard]
  );

  return (
    <View style={styles.container}>
      {data.map((item, index) => {
        const isFirst = index === 0;
        const dragHandlers = isFirst ? panResponder.panHandlers : {};
        return <Cards key={item.id} items={item} isFirst={isFirst} swipe={swipe} {...dragHandlers} />;
      }).reverse()}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => handleSelection(-1)}>
          <Image style={styles.buttonImage} source={require('../assets/No.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleSelection(1)}>
          <Image style={styles.buttonImage} source={require('../assets/Yes.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303030',
  },
  buttonsContainer: {
    width: '100%',
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    bottom: 40,
  },
  button: {
    width: 70,
    height: 70,
    backgroundColor: 'white',
    borderRadius: 35,
    elevation: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonImage: {
    width: 40,
    height: 40,
  },
});

export default CardsSwipeDemo;
