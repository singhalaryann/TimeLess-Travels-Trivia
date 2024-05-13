import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import CheckBox from "react-native-check-box";

const Signup = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSelected, setSelection] = useState(false);

    return (
        <View style={{backgroundColor: 'black', flex: 1}}>
        <View style={styles.signupPage}>
            <Text style={styles.signUp}>Sign up</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Name'
                    onChangeText={(text) => setName(text)}
                    value={name}
                />
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

            <CheckBox style={{ alignItems: 'center', left: 20, top: 2 }}
                isChecked={isSelected}
                onClick={() => setSelection(!isSelected)}
                checkBoxColor="#00bfff"
                rightText={
                    <Text>
                        I agree all statements in{" "}
                        <Text style={styles.termsOfService} onPress={() => console.log("Terms of Service clicked")}>Terms of service</Text>
                    </Text>
                }
            />
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <TouchableOpacity style={styles.socialButton} onPress={() => console.log("Sign Up")}>
                    <Text style={styles.socialText}>SIGN UP</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton} onPress={() => navigation.navigate('HomePage')}>
                    <Text style={styles.socialText}>SIGN IN</Text>
                </TouchableOpacity>
            </View>
        </View>
        </View>

    );
};

const styles = StyleSheet.create({
    signupPage: {
        position: 'absolute',
        backgroundColor: 'white',
        marginTop: 250,
        marginLeft: 40,
        width: "80%",
        height: 380,
        borderRadius: 10,
        shadowColor: 'white',
    elevation: 50, 
        
    },
    signUp: {
        fontSize: 30,
        marginTop: 8,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    inputContainer: {
        marginTop: 20,
        marginLeft: 15,
    },
    input: {
        width: '90%',
        padding: 10,
        bottom: 10,
        marginBottom: 15,
        borderRadius: 10,
        borderBottomWidth: 1, // Add a border bottom to simulate underline
    },

    socialButton: {
        alignItems: 'center',
        backgroundColor: 'black',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 30,
        marginTop: 20,
        width: '40%',
    },
    socialText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },

    termsOfService: {
        textDecorationLine: 'underline',
    },
});

export default Signup;
