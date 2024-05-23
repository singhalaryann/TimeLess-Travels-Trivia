import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';

const Storybook = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Storybook</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
                {cardsData.map((card, index) => (
                    <View key={index} style={styles.card}>
                        <Text style={styles.title}>{card.title}</Text>
                        <Image style={styles.image} source={card.image} resizeMode="repeat" />
                        <Text style={styles.subtitle}>{card.subtitle}</Text>
                        <View style={styles.cardContent}>
                            <View style={styles.cardSection}>
                                <Text style={styles.cardText}>{card.sectionTitle}</Text>
                                <View style={styles.cardSubsection}>
                                    <Text style={styles.subsectionText}>{card.sectionText}</Text>
                                </View>
                            </View>
                            <View style={styles.cardSection}>
                                <Text style={styles.cardText}>{card.description}</Text>
                            </View>
                        </View>
                    </View>
                ))}
            </ScrollView>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('HomePage')} style={styles.homeButton}>
                    <Text style={styles.buttonText}>Go to Homepage</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const cardsData = [
    {
        title: 'Bonecrusher Giant',
        image: require('../assets/Hulk.jpg'),
        subtitle: 'Creature-Giant',
        sectionTitle: 'Stomp Instant - Adventure',
        sectionText: 'Damage can\'t be prevented this turn. Stomp deals 2 damage to any target.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sed praesentium blanditiis iste vel? Minima eum mollitia aspernatur expedita modi.'
    },
    {
        title: 'Runaway Steam-Kin',
        image: require('../assets/Spiderman.jpg'),
        subtitle: 'Creature-Giant',
        sectionTitle: 'Stomp Instant - Adventure',
        sectionText: 'Damage can\'t be prevented this turn. Stomp deals 2 damage to any target.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sed praesentium blanditiis iste vel? Minima eum mollitia aspernatur expedita modi.'
    },
    {
        title: 'Runaway Steam-Kin',
        image: require('../assets/Venom.jpg'),
        subtitle: 'Creature-Giant',
        sectionTitle: 'Stomp Instant - Adventure',
        sectionText: 'Damage can\'t be prevented this turn. Stomp deals 2 damage to any target.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sed praesentium blanditiis iste vel? Minima eum mollitia aspernatur expedita modi.'
    },
    {
        title: 'Runaway Steam-Kin',
        image: require('../assets/Spiderman.jpg'),
        subtitle: 'Creature-Giant',
        sectionTitle: 'Stomp Instant - Adventure',
        sectionText: 'Damage can\'t be prevented this turn. Stomp deals 2 damage to any target.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sed praesentium blanditiis iste vel? Minima eum mollitia aspernatur expedita modi.'
    },
    {
        title: 'Runaway Steam-Kin',
        image: require('../assets/Venom.jpg'),
        subtitle: 'Creature-Giant',
        sectionTitle: 'Stomp Instant - Adventure',
        sectionText: 'Damage can\'t be prevented this turn. Stomp deals 2 damage to any target.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sed praesentium blanditiis iste vel? Minima eum mollitia aspernatur expedita modi.'
    }
];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        paddingTop: 30,
    },
    heading: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'white',
        textShadowColor: 'red',
        textShadowOffset: { width: 2, height: 4 },
        textShadowRadius: 10,
    },
    scrollContainer: {
        alignItems: 'center',
        paddingHorizontal: 5
    },
    card: {
        width: 300,
        height: 500,
        backgroundColor: 'grey',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'white',
        marginHorizontal: 10,
        padding: 8,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginVertical: 10,
        color: 'white',
    },
    image: {
        width: '100%',
        height: 100, 
        borderRadius: 20,
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
        color: 'white',
        textAlign: 'center',
    },
    cardContent: {
        flex: 1,
    },
    cardSection: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
    },
    cardText: {
        fontSize: 15,
        color: 'white',
    },
    cardSubsection: {
        marginTop: 10,
    },
    subsectionText: {
        color: 'white',
        fontSize: 14,
    },
    buttonContainer: {
        alignItems: 'center',
    },
    homeButton: {
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        bottom: 10
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
});

export default Storybook;
