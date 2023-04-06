import React from "react"
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ToastAndroid } from 'react-native'
import { useRouter } from "expo-router";

// components
import Header from "./components/Header"

// store
import { useShoppingCartStore } from '../store/shoppingCart'

export default function Cart() {
    const router = useRouter()

    const products = useShoppingCartStore(state => state.products)
    const removeAllProducts = useShoppingCartStore(state => state.removeAllProducts)

    const returnTotalCart = products.reduce((sum, item) => sum += (parseFloat(item.price) * item.quantity), 0)

    function done() {
        if (products.length > 0) {
            removeAllProducts()
            ToastAndroid.show('PEDIDO FINALIZADO!', ToastAndroid.SHORT)
            router.back()
        } else {
            ToastAndroid.show('SEU CARRINHO ESTÁ VAZIO!', ToastAndroid.SHORT)
        }
    }
    
    const renderItems = ({ item, index }) => {
        return (
            <View key={index} style={styles.card}>
                <Image source={item.image} />
                <View>
                    <Text>{item.description}</Text>
                    <Text>{item.price.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</Text>
                  </View>
                <Text>{item.quantity}</Text>
                <Text>{parseFloat(item.price * item.quantity).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</Text>
            </View>
        )
    }

    const foot = () => {
        return (
            <View>
                <TouchableOpacity onPress={() => done()}>
                    <Text>FINALIZAR PEDIDO</Text>
                </TouchableOpacity>
                <View>
                    <Text>TOTAL</Text>
                    <Text>
                        {returnTotalCart.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}
                    </Text>
                </View>
            </View>
        )
    }

    return <View style={styles.container}>
        <Header />
        <View style={styles.body}>
            <FlatList
                data={products}
                renderItem={renderItems}
                keyExtractor={({ id }) => id}
                ListFooterComponent={foot}
            />
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#191920',
    },
    body: {
        backgroundColor: '#fff',
    },
    card: {
        backgroundColor: '#fff',
        marginBottom: 16,
        borderRadius: 6,
    }
});