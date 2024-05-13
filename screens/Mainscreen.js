import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";
import Video from 'react-native-video';

const MainScreen = ({ navigation }) => {
  return (
    <View >
    {/* <Video
        source={require('../assets/Video.mp4')}
        style={styles.videoBackground}
        repeat
        resizeMode="cover"
      /> */}
      <Image style={styles.homepage} source={require('../assets/TT.jpg')}/>
      <Text style={styles.timelessTravelsBegin}>
        Timeless Travels (begin your journey..)
      </Text>
      <Text style={styles.getmoredone}>Get More Done</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('SignupPage')}>
          <Text style={styles.socialButton1}>SIGN UP</Text>
        </TouchableOpacity>

        <View style={{flexDirection: 'row' }}>
          <Text style={styles.text}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SigninPage')}>
            <Text style={styles.signin}>Sign In</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.orContainer}>
          <Text style={styles.orText}>Or</Text>
        </View>
        <View style={styles.line}></View>
        <View style={styles.line}></View>

        <TouchableOpacity style={styles.socialButton} onPress={() => console.log("Sign in with Google pressed")}>
          <Image source={require("../assets/google.png")} style={styles.socialIcon} />
          <Text style={styles.socialText}>Sign up with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton} onPress={() => console.log("Sign up with Facebook pressed")}>
          <Image source={require("../assets/facebook.png")} style={styles.socialIcon} />
          <Text style={styles.socialText}>Sign up with Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  homepage: {
    width: '100%',
    height: 950,
    position: 'absolute'  
  },
  // videoBackground: {
  //   position: 'absolute',
  //   top: 0,
  //   left: 0,
  //   bottom: 0,
  //   right: 0,
  // },

  timelessTravelsBegin: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: 'bold',
    textShadowColor: 'white',
    textShadowOffset: { width: 1, height: 5 },
    textShadowRadius: 20,
    top: 70,
  },
  getmoredone: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    textShadowColor: 'white',
    textShadowOffset: { width: 1, height: 5 },
    textShadowRadius: 20,
    top: 80
  },

  buttonContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    top: 580,
    left: 25
  },
  socialButton1: {
    paddingHorizontal: 140,
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: 'red',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  },

  text: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 15,
  },
  signin: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 15,
    left: 7,
    textDecorationLine: 'underline',
  },

  orContainer: {
    marginTop: 10,
  },
  orText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  line: {
    width: '90%',
    height: 1,
    backgroundColor: 'red',
    marginVertical: 3,
  },

  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 30,
    marginTop: 20,
    width: '90%',
  },
  socialIcon: {
    width: 28,
    height: 28,
    marginRight: 10
  },
  socialText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default MainScreen;
