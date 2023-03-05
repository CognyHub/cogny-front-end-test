import React, { useState } from 'react';
import { Text, View, Image, Pressable, StyleSheet } from 'react-native';

export default function OrderCard(image, description, price, key) {
    const [quantity, setQuantity] = useState(quant || 0);
    return (
        <View key={key}>
            <Image
                source={{ uri: image }}
                style={styles.orderImage}
                alt="Imagem do produto"
            />
            <View >
                <Text>{description}</Text>
                <Text >{price}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    orderImage: {
        height: '15px',
        width: '15px',
    }
});