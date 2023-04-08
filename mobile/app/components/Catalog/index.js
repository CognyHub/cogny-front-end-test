import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'

import { formatCurrency, getSupportedCurrencies } from 'react-native-format-currency'

// firebase
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../../firebaseConfig'

// store
import { useShoppingCartStore } from '../../../store/shoppingCart'
import { useListProductsStore } from '../../../store/listProducts'

export default function Catalog() {
    const increaseProduct = useShoppingCartStore(state => state.increaseProduct)
    const products = useShoppingCartStore(state => state.products)
    
    const increaseList = useListProductsStore(state => state.increaseList)
    const listProducts = useListProductsStore(state => state.listProducts)

    const fetchProducts = async () => {
        await getDocs(collection(db, "products"))
            .then((querySnapshot)=>{               
                const products = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }))

                increaseList(products)
            })
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    const renderItems = ({ item }) => {
        const quantity = products.find(product => item.id === product.id)?.quantity || 0

        const [valueFormattedWithSymbol, valueFormattedWithoutSymbol, symbol] = formatCurrency({ amount: Number(item.price), code: 'BRL' })
        return (
            <View key={item.id} style={styles.card}>
                <Image source={{uri: item.image}} style={styles.photo} />
                <Text style={styles.descriptionProduct}>{item.description}</Text>
                <Text style={styles.price}>{valueFormattedWithSymbol}</Text>
                <TouchableOpacity onPress={() => increaseProduct(item)} style={styles.btn}>
                    <Text style={styles.btnQtd}>{quantity}</Text>
                    <Text style={styles.btnText}>ADICIONAR AO CARRINHO</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return  <View style={styles.container}>
        <FlatList
            data={listProducts}
            renderItem={renderItems}
            keyExtractor={({ id }) => id}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 20, 
    },
    descriptionProduct: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 21,
        color: '#333333', 
        marginLeft: 20, 
        marginRight: 20,
        marginBottom: 15
    }, 
    card: {
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#fff',
        marginBottom: 16,
        borderRadius: 6,
        height: 358, 
    }, 
    photo: {
		height: 160,
		borderRadius: 6,
		marginVertical: 16,
		marginLeft: 16,
	},
    btn: {
        flexDirection: 'row', 
        alignItems: 'center', 
        backgroundColor: '#F8375D', 
        marginTop: 30, 
        height: 43, 
        borderRadius: 6, 
        margin: 8
    }, 
    btnQtd: {
        width: 52,
        height: 43,
        backgroundColor: '#000000', 
        opacity: 0.2,
        textAlign: "center", 
        color: '#FFFFFF', 
        fontSize: 14,
        padding: 10
    },
    btnText: {
        fontWeight: "700", 
        textAlign: "center", 
        color: '#fff', 
        fontSize: 14, 
        flex: 1
    }, 
    price: {
        fontWeight: '700', 
        fontSize: 21, 
        lineHeight: 25, 
        marginLeft: 20, 
        marginRight: 20
    }
});