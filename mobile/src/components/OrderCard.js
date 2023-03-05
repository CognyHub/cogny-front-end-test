import React, { useState, useContext, useEffect} from 'react';
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
                onChangeText={(e) => handleChange(e)}
                value={quantity}
                min="1"
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