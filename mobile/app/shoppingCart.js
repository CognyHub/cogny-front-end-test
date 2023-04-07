import React from "react"
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ToastAndroid } from 'react-native'
import { useRouter } from "expo-router"

import { formatCurrency, getSupportedCurrencies } from "react-native-format-currency"

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
    
    const renderItems = ({ item }) => {
        const [valueFormattedWithSymbol, valueFormattedWithoutSymbol, symbol] = formatCurrency({ amount: Number(item.price), code: 'BRL' })
        const [valueFormattedWithSymbolTotal] = formatCurrency({ amount: Number(item.price * item.quantity), code: 'BRL' })
        return (
            <View key={item.id} style={styles.card}>
                <View style={styles.product}>
                    <Image source={{uri: item.image}} style={styles.photo} resizeMode='contain'/>
                    <View>
                        <Text style={styles.descriptionProduct}>{item.description}</Text>
                        <Text style={styles.totalValueProduct}>{valueFormattedWithSymbol}</Text>
                    </View>
                </View>
                <View style={styles.quantity}>
                    <Text style={{paddingLeft: 60}}>{item.quantity}</Text>
                    <View >

                        <Text style={styles.totalValueProduct}>{valueFormattedWithSymbolTotal}</Text>
                    </View>
                </View>
            </View>
        )
    }

    const foot = () => {
        const [valueFormattedWithSymbol, valueFormattedWithoutSymbol, symbol] = formatCurrency({ amount: Number(returnTotalCart), code: 'BRL' })
        return (
            <View>
                <View style={styles.totalBox}>
                    <Text style={styles.total}>TOTAL</Text>
                    <Text style={styles.totalValue}>{valueFormattedWithSymbol}</Text>
                </View>
                <TouchableOpacity onPress={() => done()} style={styles.btn}>
                    <Text style={styles.btnText}>FINALIZAR PEDIDO</Text>
                </TouchableOpacity>
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
        padding: 20
    },
    body: {
        backgroundColor: '#fff',
        borderRadius: 6,
        padding: 20
    },
    card: {
        backgroundColor: '#fff',
        marginBottom: 16,
        borderRadius: 6,
    }, 
    product: {
        flexDirection: 'row', 
        alignItems: 'center', 
    }, 
    photo: {
		height: 100,
        width: 80,
	},
    btn: {
        flexDirection: 'row', 
        alignItems: 'center', 
        backgroundColor: '#F8375D', 
        marginTop: 30, 
        height: 43, 
        borderRadius: 6, 
        width: 330, 
        margin: 8, 
        marginBottom: 10
    }, 
    btnText: {
        fontWeight: "700", 
        textAlign: "center", 
        color: '#fff', 
        fontSize: 14, 
        flex: 1
    }, 
    totalBox: {
        flex: 1, 
        alignItems: 'center'
    },
    total: {
        color: '#999999', 
        fontSize: 16, 
        lineHeight: 19, 
        fontWeight: '700'
    }, 
    totalValue: {
        color: '#000000', 
        fontWeight: '700', 
        fontSize: 30, 
        lineHeight: 35
    }, 
    descriptionProduct: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 21,
        color: '#333333', 
    }, 
    totalValueProduct: {
        color: '#000000', 
        fontWeight: '700', 
        fontSize: 16, 
        lineHeight: 19
    }, 
    quantity: {
        flexDirection: 'row', 
        alignItems: 'center', 
        flex: 1, 
        justifyContent: 'space-between'
    }
});