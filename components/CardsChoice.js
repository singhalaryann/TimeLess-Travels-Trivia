import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const CardsChoice = ({ type }) => {
  return (
    <View>
      <Text style={[styles.text, { color: type === 'Nope' ? 'red' : 'white', borderColor: type === 'Nope' ? 'red' : 'blue',  }]}>
        {type}
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    borderWidth: 5,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
    borderRadius: 10
  }
})

export default CardsChoice
