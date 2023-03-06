import React, { useState, useContext, useEffect } from 'react';
import { Text, View, Image, TextInput, StyleSheet } from 'react-native';
import CartContext from '../context/CartContext';

export default function OrderCard(image, description, price, key, quant) {
    const [quantity, setQuantity] = useState(quant || 0);
    const { setTotal, orders, total } = useContext(CartContext);

    useEffect(() => {
        const totalPrice = orders.reduce((total, valor) => total + valor.price, 0);
        setTotal(totalPrice);
    }, [orders, setTotal]);


    const handleChange = (value) => {
        setQuantity(value)
        setTotal((old) => old += price)
    }
    return (
        <View key={key}>
            <View style={styles.topContainer} >

                <Image
                    source={{ uri: image }}
                    style={styles.orderImage}
                    alt="Imagem do produto"
                />
                <View style={styles.orderText}>
                    <Text>{description}</Text>
                    <Text style={{ fontWeight: 'bold' }} >{`R$${price}`}</Text>
                </View>
            </View >
            <View style={styles.inputContainer}>

                <TextInput
                    style={styles.input}
                    onChangeText={(e) => handleChange(e)}
                    value={quantity}
                    min="1"
                    keyboardType="numeric"
                />
                <Text
                    style={{ fontWeight: 'bold' }}
                >{`R$${(quantity * price)?.toFixed(2).toString().replace('.', ',')}`}</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    orderImage: {
        height: '100%',
        width: '30%',
    },
    topContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        height: '100px',
        justifyContent: 'space-evenly'

    },
    orderText: {
        width: '60%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        backgroundColor: 'white',
        borderRadius: '3px',
        height: '20px',
        width: '30px',
    },
    inputContainer: {
        alignItems: 'center',
        borderRadius: '10px',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '85%',
        margin: 'auto',
        height: '40px',
        backgroundColor: '#D3D3D3'
    }
});