import { View, Text, Image, StyleSheet, Animated } from 'react-native'
import React, { useCallback } from 'react'
import CardsChoice from './CardsChoice'

const Cards = ({ items, isFirst, swipe, ...rest }) => {
  const rotate = swipe.x.interpolate({
    inputRange: [-100, 0, 100],
    outputRange: ['-8deg', '0deg', '8deg'],
  })
  const likeOpacity = swipe.x.interpolate({
    inputRange: [10, 100],
    outputRange: [0, 1],
    extrapolate: 'clamp'
  })
  const nopeOpacity = swipe.x.interpolate({
    inputRange: [-100, -10],
    outputRange: [1, 0],
    extrapolate: 'clamp'
  })

  const cardSelection = useCallback(() => {
    return (
      <>
        <Animated.View style={{ position: 'absolute', top: 40, right: 30, transform: [{ rotate: '30deg' }], opacity: nopeOpacity }}>
          <CardsChoice type={'Nope'} />
        </Animated.View>
        <Animated.View style={{ position: 'absolute', top: 30, left: 10, transform: [{ rotate: '-20deg' }], opacity: likeOpacity }}>
          <CardsChoice type={items.about} />
        </Animated.View>
      </>
    )
  }, [])  

  return (
    <Animated.View style={[{ position: 'absolute', alignSelf: 'center', justifyContent: 'center', top: 50 }, isFirst && { transform: [...swipe.getTranslateTransform(), {rotate: rotate }] }]} {...rest}>
      <Image style={{ width: 350, height: 500, borderRadius: 20,}} source={items.image} />
      <Text style={styles.text}>{items.title}</Text>
      {isFirst && cardSelection()}
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    color: 'white',
    bottom: 55,
    left: 10,
    fontWeight: 'bold'
  },
  about: {
    fontSize: 22,
    color: 'white',
    top: 20,
    left: 10,
    fontWeight: 'bold',
    position: 'absolute'
  }
})
export default Cards