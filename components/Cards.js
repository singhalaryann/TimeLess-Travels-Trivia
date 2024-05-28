import { View, Text, Image, StyleSheet, Animated } from 'react-native';
import React, { useCallback } from 'react';
import CardsChoice from './CardsChoice';

const Cards = ({ items, isFirst, swipe, ...rest }) => {
  const rotate = swipe.x.interpolate({
    inputRange: [-100, 0, 100],
    outputRange: ['-8deg', '0deg', '8deg'],
  });
  const likeOpacity = swipe.x.interpolate({
    inputRange: [10, 100],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });
  const nopeOpacity = swipe.x.interpolate({
    inputRange: [-100, -10],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const cardSelection = useCallback(() => {
    return (
      <>
        <Animated.View style={[styles.choiceContainer, styles.nope, { opacity: nopeOpacity }]}>
          <CardsChoice type="Nope" />
        </Animated.View>
        <Animated.View style={[styles.choiceContainer, styles.like, { opacity: likeOpacity }]}>
          <CardsChoice type={items.about} />
        </Animated.View>
      </>
    );
  }, [likeOpacity, nopeOpacity, items.about]);

  return (
    <Animated.View style={[styles.cardContainer, isFirst && { transform: [...swipe.getTranslateTransform(), { rotate }] }]} {...rest}>
      <Image style={styles.cardImage} source={items.image} />
      <Text style={styles.cardTitle}>{items.title}</Text>
      {isFirst && cardSelection()}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 60
  },
  cardImage: {
    width: 350,
    height: 500,
    borderRadius: 20,
  },
  cardTitle: {
    fontSize: 28,
    color: 'white',
    position: 'absolute',
    bottom: 55,
    left: 10,
    fontWeight: 'bold',
  },
  choiceContainer: {
    position: 'absolute',
    top: 30,
    transform: [{ rotate: '20deg' }],
  },
  nope: {
    right: 30,
    transform: [{ rotate: '30deg' }],
  },
  like: {
    left: 10,
    transform: [{ rotate: '-20deg' }],
  },
});

export default Cards;
