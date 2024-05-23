import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import CheckBox from "react-native-check-box";

const Signin = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSelected, setSelection] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.signinPage}>
                <Text style={styles.signIn}>Sign IN</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder='Email'
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder='Password'
                        secureTextEntry={true}
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                    />
                </View>

                <CheckBox
                    style={{ alignItems: 'center', left: 20, top: 15}}
                    isChecked={isSelected}
                    onClick={() => setSelection(!isSelected)}
                    checkBoxColor="#00bfff"
                    rightText={
                        <View style={{ position: 'absolute', flexDirection: 'row'}}>
                            <Text style={{ fontSize: 14}}>Remember Me {"           "}</Text>
                            <TouchableOpacity onPress={() => console.log("Forget Password clicked")}>
                                <Text style={{ fontWeight: 'bold'}}>Forget Password</Text>
                            </TouchableOpacity>
                        </View>
                    }
                />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('HomePage')}>
                        <Text style={styles.socialButton1}>Login In</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    flexDirection: 'row', alignSelf: 'center'
                }}>
                {/* <View style={{flexDirection:'row'}}> */}
                    <Text style={styles.text1}>Create an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SignupPage')}>
                        <Text style={styles.text2}>Sign Up</Text>
                    </TouchableOpacity>
                    {/* </View> */}
                </View>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    signinPage: {
        position: 'absolute',
        backgroundColor: 'white',
        marginLeft: 40,
        width: "80%",
        height: 350,
        borderRadius: 10,
        shadowColor: 'white',
    elevation: 50, 
    },    
    signIn: {
        fontSize: 28,
        marginTop: 10,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    inputContainer: {
        top: 10,
        marginLeft: 15,
    },
    input: {
        width: '90%',
        padding: 10,
        marginBottom: 15,
        borderRadius: 10,
        borderBottomWidth: 1, // Add a border bottom to simulate underline
    },

   
    buttonContainer: {
        position: 'absolute',
        alignSelf: 'center',
        width: '85%',
        top: 240,
    },
    socialButton1: {
        paddingHorizontal: 100,
        paddingVertical: 12,
        borderRadius: 8,
        backgroundColor: 'red',
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    text1: {
        fontSize: 15,
        color: 'black',
        top: 105,
    },
    text2: {
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold',
        top: 105,
    },
});

export default Signin;
