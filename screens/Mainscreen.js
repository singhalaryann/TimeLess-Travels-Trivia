import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image, ScrollView } from "react-native";

const MainScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image style={styles.homepage} source={require('../assets/TT.jpg')} />
      <View style={styles.topSection}>
        <Text style={styles.timelessTravelsBegin}>
          Timeless Travels (begin your journey..)
        </Text>
        <Text style={styles.getmoredone}>Get More Done</Text>
      </View>
      <View style={styles.bottomSection}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('SignupPage')} style={styles.signupButton}>
            <Text style={styles.socialButton1}>SIGN UP</Text>
          </TouchableOpacity>

          <View style={styles.signinContainer}>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  homepage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  topSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timelessTravelsBegin: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: 'bold',
    textShadowColor: 'white',
    textShadowOffset: { width: 1, height: 5 },
    textShadowRadius: 20,
    color: 'white',
    marginTop: 20,
  },
  getmoredone: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    textShadowColor: 'white',
    textShadowOffset: { width: 1, height: 5 },
    textShadowRadius: 20,
    marginTop: 10,
  },
  buttonContainer: {
    alignItems: 'center',
    width: '90%',
    marginTop: 40,
  },
  signupButton: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  socialButton1: {
    paddingVertical: 12,
    paddingHorizontal: 100,
    borderRadius: 10,
    backgroundColor: 'red',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  signinContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  signin: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 7,
    textDecorationLine: 'underline',
  },
  orContainer: {
    marginBottom: 8,
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
    paddingVertical: 12,
    borderRadius: 30,
    marginTop: 10,
    width: '90%',
  },
  socialIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  socialText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default MainScreen;
