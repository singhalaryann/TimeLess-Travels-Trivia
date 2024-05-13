import * as React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";

const Homepage = ({ navigation }) => {
  return (
    <View style={styles.homepage}>
      <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('')}>
        <Text style={styles.socialButton1}>Timeless Travels</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('LevelsPage')}>
          <Text style={styles.socialButton2}>LEVELS</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.image}>
      <TouchableOpacity  onPress={() => console.log("Setting is clicked!")}>
        <Image style={styles.image} source={require('../assets/Setting.png')} />
      </TouchableOpacity>
      </View>
      <View style={styles.image2}>
      <TouchableOpacity style={styles.image2} onPress={() => navigation.navigate('StorybookPage')}>
        <Image style={styles.image2} source={require('../assets/book.png')} />
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
    backgroundColor: "grey",
    
  },
  buttonContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 500,
    
  },
  socialButton1: {
    paddingHorizontal: 80,
    paddingVertical: 35,
    borderRadius: 30,
    backgroundColor: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black', 
    
  },
  socialButton2: {
    paddingHorizontal: 60,
    paddingVertical: 20,
    backgroundColor: 'white',
    fontSize: 22,
    borderRadius: 30,
    fontWeight: 'bold',
    color: 'black',
    top: 20
  },
  image: {
    position: 'absolute',
    top: 30,
    right: 10,
    width: 40,
    height: 40,
  },
  image2: {
    position: 'absolute',
    top: 40,
    right: 6,
    width: 42,
    height: 42,
  }
});

export default Homepage;