import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';

const Storybook = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Storybook</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.card}>
                    <Text style={styles.title}>Bonecrusher Giant</Text>
                    <Image style={styles.image} source={require('../assets/Hulk.jpg')} />
                    <Text style={styles.subtitle}>Creature-Giant</Text>
                    <View style={styles.cardContent}>
                        <View style={styles.cardSection}>
                            <Text style={styles.cardText}>Stomp Instant - Adventure</Text>
                            <View style={styles.cardSubsection}>
                                <Text style={styles.subsectionText}>Damage can't be prevented this turn. Stomp deals 2 damage to any target.</Text>
                            </View>
                        </View>
                        <View style={styles.cardSection}>
                            <Text style={styles.cardText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sed praesentium blanditiis iste vel? Minima eum mollitia aspernatur expedita modi.</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.card}>
                    <Text style={styles.title}>Runaway Steam-Kin</Text>
                    <Image style={styles.image} source={require('../assets/Spiderman.jpg')} />
                    <Text style={styles.subtitle}>Creature-Giant</Text>

                    <View style={styles.cardContent}>
                        <View style={styles.cardSection}>
                            <Text style={styles.cardText}>Stomp Instant - Adventure</Text>
                            <View style={styles.cardSubsection}>
                                <Text style={styles.subsectionText}>Damage can't be prevented this turn. Stomp deals 2 damage to any target.</Text>
                            </View>
                        </View>

                        <View style={styles.cardSection}>
                            <Text style={styles.cardText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sed praesentium blanditiis iste vel? Minima eum mollitia aspernatur expedita modi.</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.card}>
                    <Text style={styles.title}>Runaway Steam-Kin</Text>
                    <Image style={styles.image} source={require('../assets/Venom.jpg')} />
                    <Text style={styles.subtitle}>Creature-Giant</Text>

                    <View style={styles.cardContent}>
                        <View style={styles.cardSection}>
                            <Text style={styles.cardText}>Stomp Instant - Adventure</Text>
                            <View style={styles.cardSubsection}>
                                <Text style={styles.subsectionText}>Damage can't be prevented this turn. Stomp deals 2 damage to any target.</Text>
                            </View>
                        </View>
                        <View style={styles.cardSection}>
                            <Text style={styles.cardText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sed praesentium blanditiis iste vel? Minima eum mollitia aspernatur expedita modi.</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.card}>
                    <Text style={styles.title}>Runaway Steam-Kin</Text>
                    <Image style={styles.image} source={require('../assets/Spiderman.jpg')} />
                    <Text style={styles.subtitle}>Creature-Giant</Text>

                    <View style={styles.cardContent}>
                        <View style={styles.cardSection}>
                            <Text style={styles.cardText}>Stomp Instant - Adventure</Text>
                            <View style={styles.cardSubsection}>
                                <Text style={styles.subsectionText}>Damage can't be prevented this turn. Stomp deals 2 damage to any target.</Text>
                            </View>
                        </View>
                        <View style={styles.cardSection}>
                            <Text style={styles.cardText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sed praesentium blanditiis iste vel? Minima eum mollitia aspernatur expedita modi.</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.card}>
                    <Text style={styles.title}>Runaway Steam-Kin</Text>
                    <Image style={styles.image} source={require('../assets/Venom.jpg')} />
                    <Text style={styles.subtitle}>Creature-Giant</Text>

                    <View style={styles.cardContent}>
                        <View style={styles.cardSection}>
                            <Text style={styles.cardText}>Stomp Instant - Adventure</Text>
                            <View style={styles.cardSubsection}>
                                <Text style={styles.subsectionText}>Damage can't be prevented this turn. Stomp deals 2 damage to any target.</Text>
                            </View>
                        </View>
                        <View style={styles.cardSection}>
                            <Text style={styles.cardText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sed praesentium blanditiis iste vel? Minima eum mollitia aspernatur expedita modi.</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('HomePage')}>
                        <Text style={styles.socialButton2}>Go to Homepage</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        position: 'absolute',
        top: 750, // Adjust this value as needed
        left: 90,
    },
    socialButton2: {
        paddingHorizontal: 40,
        paddingVertical: 20,
        backgroundColor: 'white',
        fontSize: 20,
        borderRadius: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'black',
    },
    heading: {
        fontSize: 35,
        marginTop: 35,
        fontWeight: 'bold',
        color: 'white',
        textShadowColor: 'red',
        textShadowOffset: { width: 2, height: 4 },
        textShadowRadius: 10,
    },
    card: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 30,
        width: 300,
        height: 600,
        backgroundColor: 'grey',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'white',

    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 10,
    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 20,
        borderWidth: 5,
        borderColor: 'black',
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        marginLeft: 10,
    },
    cardContent: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        top: 40,
        height: 205,
    },
    cardSection: {
        flex: 1,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 10,
        padding: 12,
        marginHorizontal: 4,
        marginBottom: 40,
    },
    cardText: {
        fontSize: 15,
    },
    cardSubsection: {
        alignItems: 'center',
        marginTop: 15,
        width: 135,
    },
    subsectionText: {
        padding: 5,
    },
});

export default Storybook;
