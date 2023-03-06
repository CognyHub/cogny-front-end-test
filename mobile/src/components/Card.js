import React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function Card(image, description, price, click, key) {
    return (
        <View style={styles.cardContainer} key={key}>
            <Image
                source={{ uri: image }}
                style={styles.imageCard}
                alt="Imagem do produto"
            />
            <View style={styles.textContainer}>
                <Text>{description}</Text>
                <Text style={styles.textPrice}>
                    {`R$${price.toFixed(2).toString().replace('.', ',')}`}
                    </Text>
            </View>

            <TouchableOpacity style={styles.cardButton} onPress={click}>
                <Text style={styles.textButton}>Adicionar ao Carrinho</Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: 'white',
        border: '1px solid black',
        height: '10%',
        justifyContent: 'space-between',
        marginBottom: 20,
        width: '90%',
    },
    imageCard: {
        alignSelf: 'center',
        width: 200,
        height: 200
    },
    textContainer: {
        alignSelf: 'center',
        width: '90%',
        marginBottom: 10
    },
    cardButton: {
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: '#ef3d5e',
        borderRadius: 5,
        height: 40,
        marginBottom: 10,
        textAlign: ' center',
        width: '90%',
    },
    textButton: {
        margin: 'auto',
        fontSize: 15,
        color: 'white'
    },
    textPrice : {
        fontSize: '18px',
        fontWeight: 'bold'
    }

});