import { View, Text, ViewBase, PanResponder, Animated, Image, StyleSheet } from 'react-native'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Cards from '../components/Cards';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CardsSwipeDemo = () => {
  const [data, setData] = useState([
    { image: require('../assets/Groot.jpg'), id: 1, title: 'Groot' },
    { image: require('../assets/Thor.jpg'), id: 2, title: 'Thor' },
    { image: require('../assets/Hulk.jpg'), id: 3, title: 'Hulk' },
    { image: require('../assets/Spiderman.jpg'), id: 4, title: 'Spiderman' },
    { image: require('../assets/Thor.jpg'), id: 5, title: 'Thor' },
    { image: require('../assets/Venom.jpg'), id: 6, title: 'Venom' },
  ]);

  useEffect(()=> {
if(!data.length){
   setData([
    { image: require('../assets/Groot.jpg'), id: 1, title: 'Groot' },
    { image: require('../assets/Thor.jpg'), id: 2, title: 'Thor' },
    { image: require('../assets/Hulk.jpg'), id: 3, title: 'Hulk' },
    { image: require('../assets/Spiderman.jpg'), id: 4, title: 'Spiderman' },
    { image: require('../assets/Thor.jpg'), id: 5, title: 'Thor' },
    { image: require('../assets/Venom.jpg'), id: 6, title: 'Venom' },
  ])
}
  }, [data])
  const swipe = useRef(new Animated.ValueXY()).current;
  const panResponser = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, { dx, dy }) => {
      console.log("dx:" + dx + "dy:" + dy);
      swipe.setValue({ x: dx, y: dy })
    },
    onPanResponderRelease: (_, { dx, dy }) => {
      console.log('released:' + 'dx:' + dx + 'dy:' + dy)
      let direction = Math.sign(dx)
      let isActionActive = Math.abs(dx) > 300
      if (isActionActive) {
        Animated.timing(swipe, {
           toValue: { x: 200*dx, y: dy },
          useNativeDriver: true,
          duration: 200 // means after moving the card more than 300 direction on x then, the card will be swipepd!
        }).start(removeCard)
      }
      else {
        Animated.spring(swipe, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: true,
          friction: 4 // helps in friction after releasing
        }).start()
      }
    }
  })

  const removeCard = useCallback(() => {
    setData(previousState => previousState.slice(1))
    swipe.setValue({x:0, y: 0})
  }, [swipe] )

  const handleSelection = useCallback(direction => {
    Animated.timing(swipe, {
      toValue: { x: direction*700, y: 0 },
     useNativeDriver: true,
     duration: 500 // means after moving the card more than 300 direction on x then, the card will be swipepd!
   }).start(removeCard) 
 }, [removeCard]
  )
  return (
    <View style={{ flex: 1, backgroundColor: '#808080' }}>
      {data.map((item, index) => {
        let isFirst = index === 0;
        let dragHandlers = isFirst ? panResponser.panHandlers : {};
        return <Cards items={item} isFirst={isFirst} swipe={swipe} {...dragHandlers} />
      }).reverse()}
      <View style={{width: '100%', position: 'absolute', flexDirection: 'row', justifyContent: 'space-evenly',bottom: 70}}>
      <TouchableOpacity style= {{width: 70, height: 70, backgroundColor: 'white',  borderRadius: 40, elevation: 15 }} onPress={()=> {handleSelection(-1)}}>
      <Image style={styles.button}source={require('../assets/No.png')}/>
      </TouchableOpacity>
      <TouchableOpacity style= {{width: 70, height: 70, backgroundColor: 'white',  borderRadius: 40, elevation: 15 }} onPress={()=> {handleSelection(1)}}>
      <Image style={styles.button}source={require('../assets/Yes.png')}/>
      </TouchableOpacity>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 70,
    height: 70,
  }
})
export default CardsSwipeDemo