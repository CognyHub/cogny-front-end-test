import React, { useState, useContext } from 'react';
import { Text, View, Image, TextInput, StyleSheet } from 'react-native';
import CartContext from '../context/CartContext';

export default function OrderCard(image, description, price, key, quant) {
    const [quantity, setQuantity] = useState(quant || 0);
    const { setTotal } = useContext(CartContext);

    const handleChange = (value, price) => {
        setQuantity(value)
        setTotal((old) => old += price)
    }
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
            <TextInput
                style={styles.input}
                onChangeText={(e) => handleChange(e, price)}
                value={quantity}
                keyboardType="numeric"
            />
            <Text >{`R$${(quantity * price)?.toFixed(2).toString().replace('.', ',')}`}</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    orderImage: {
        height: '15px',
        width: '15px',
    }
});