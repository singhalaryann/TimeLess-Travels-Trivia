import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const CardsChoice = ({ type }) => {
  return (
    <View>
      <Text style={[styles.text, { color: type === 'Like' ? 'green' : 'red', borderColor: type === 'Like' ? 'green' : 'red',  }]}>
        {type}
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    borderWidth: 5,
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 10,
    paddingRight: 10,
    borderRadius: 10
  }
})

export default CardsChoice
