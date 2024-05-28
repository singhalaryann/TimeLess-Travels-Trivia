import * as React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";

const Homepage = ({ navigation }) => {
  return (
    <View style={styles.homepage}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => console.log("Setting is clicked!")}>
          <Image style={styles.settingImage} source={require('../assets/Setting.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('StorybookPage')}>
          <Image style={styles.bookImage} source={require('../assets/book.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.firstButton]} onPress={() => navigation.navigate('MainScreen')}>
          <Text style={styles.buttonText}>Timeless Travels</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.secondButton]} onPress={() => navigation.navigate('LevelsPage')}>
          <Text style={styles.buttonText}>LEVELS</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homepage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  headerContainer: {
    position: 'absolute',
    top: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 40
  },
  settingImage: {
    width: 40,
    height: 40,
    tintColor: 'lightgrey',
  },
  bookImage: {
    width: 42,
    height: 42,
    tintColor: 'lightgrey',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginTop: 100,
  },
  button: {
    width: 250,
    paddingVertical: 20,
    borderRadius: 30,
    marginVertical: 10,
    backgroundColor: 'tomato',
    elevation: 5,
  },
  firstButton: {
    backgroundColor: 'tomato',
  },
  secondButton: {
    backgroundColor: 'tomato',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'lightgrey',
    textAlign: 'center',
  },
});

export default Homepage;
