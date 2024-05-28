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
                        <Image style={styles.image} source={card.image} resizeMode="cover" />
                        <Text style={styles.subtitle}>{card.subtitle}</Text>
                        <View style={styles.cardContent}>
                            <View style={styles.cardSection}>
                                <Text style={styles.cardSectionTitle}>{card.sectionTitle}</Text>
                                <Text style={styles.cardSectionText}>{card.sectionText}</Text>
                            </View>
                            <View style={styles.cardSection}>
                                <Text style={styles.cardDescription}>{card.description}</Text>
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
        image: require('../assets/HH-1.jpg'),
        subtitle: 'Creature-Giant',
        sectionTitle: 'Stomp Instant - Adventure',
        sectionText: 'Damage can\'t be prevented this turn. Stomp deals 2 damage to any target.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sed praesentium blanditiis iste vel? Minima eum mollitia aspernatur expedita modi.'
    },
    {
        title: 'Runaway Steam-Kin',
        image: require('../assets/HH-2.jpg'),
        subtitle: 'Creature-Giant',
        sectionTitle: 'Stomp Instant - Adventure',
        sectionText: 'Damage can\'t be prevented this turn. Stomp deals 2 damage to any target.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sed praesentium blanditiis iste vel? Minima eum mollitia aspernatur expedita modi.'
    },
    {
        title: 'Runaway Steam-Kin',
        image: require('../assets/Punk-Rock.jpg'),
        subtitle: 'Creature-Giant',
        sectionTitle: 'Stomp Instant - Adventure',
        sectionText: 'Damage can\'t be prevented this turn. Stomp deals 2 damage to any target.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sed praesentium blanditiis iste vel? Minima eum mollitia aspernatur expedita modi.'
    },
    {
        title: 'Runaway Steam-Kin',
        image: require('../assets/Carnival.jpg'),
        subtitle: 'Creature-Giant',
        sectionTitle: 'Stomp Instant - Adventure',
        sectionText: 'Damage can\'t be prevented this turn. Stomp deals 2 damage to any target.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sed praesentium blanditiis iste vel? Minima eum mollitia aspernatur expedita modi.'
    },
    {
        title: 'Runaway Steam-Kin',
        image: require('../assets/Haunted.jpg'),
        subtitle: 'Creature-Giant',
        sectionTitle: 'Stomp Instant - Adventure',
        sectionText: 'Damage can\'t be prevented this turn. Stomp deals 2 damage to any target.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sed praesentium blanditiis iste vel? Minima eum mollitia aspernatur expedita modi.'
    }
];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
        paddingTop: 50


    },
    heading: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#E0E0E0',
        textShadowColor: '#FF6347',
        textShadowOffset: { width: 2, height: 4 },
        textShadowRadius: 10,
        marginBottom: 20,
    },
    scrollContainer: {
        paddingHorizontal: 10,
    },
    card: {
        width: 300,
        height: 500,
        backgroundColor: '#1E1E1E',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#E0E0E0',
        marginHorizontal: 10,
        padding: 15,
        elevation: 5,
        
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginBottom: 10,
        color: '#FF6347',
        
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 10,
        marginBottom: 15,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#E0E0E0',
        textAlign: 'center',
    },
    cardContent: {
        flex: 1,
        
    },
    cardSection: {
        marginBottom: 15,
        padding: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 10,
    },
    cardSectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FF6347',
        marginBottom: 5,
    },
    cardSectionText: {
        fontSize: 14,
        color: '#E0E0E0',
    },
    cardDescription: {
        fontSize: 14,
        color: '#E0E0E0',
    },
    buttonContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    homeButton: {
        backgroundColor: '#FF6347',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 25,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#E0E0E0',
    },
});

export default Storybook;
