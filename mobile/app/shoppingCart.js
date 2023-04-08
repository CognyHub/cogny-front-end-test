import React from "react"
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ToastAndroid, TextInput } from 'react-native'
import { useRouter } from "expo-router"
import { StatusBar } from 'expo-status-bar'

import { formatCurrency, getSupportedCurrencies } from "react-native-format-currency"
import { v4 as uuidv4 } from 'uuid'

// components
import Header from "./components/Header"

// store
import { useShoppingCartStore } from '../store/shoppingCart'

// firebase
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebaseConfig'

export default function Cart() {
    const router = useRouter()

    const products = useShoppingCartStore(state => state.products)
    const removeAllProducts = useShoppingCartStore(state => state.removeAllProducts)

    const alterQuantity = useShoppingCartStore(state => state.alterQuantity)

    const returnTotalCart = products.reduce((sum, item) => sum += (parseFloat(item.price) * item.quantity), 0)

    const done = async () => {
        //console.log('oi')
        if (products.length > 0) {
            const shopping = products.reduce((group, item) => {
                group.push({
                    productId: item.id, 
                    qtd: item.quantity, 
                    price: item.price
                })
                return group
            }, [])

            const docData = {
                products: shopping,
                total: returnTotalCart,
                date: new Date(),
            }

            //await setDoc(doc(db, "data", "one"), docData);
            //await db.collection("shopping").add(docData)

            const docRef = collection(db, "shopping")
            await addDoc(docRef, docData)
            
            removeAllProducts()
            ToastAndroid.show('PEDIDO FINALIZADO!', ToastAndroid.SHORT)
            router.back()
        } else {
            ToastAndroid.show('SEU CARRINHO ESTÁ VAZIO!', ToastAndroid.SHORT)
        }
    }
    
    const updateQuantity = (type, product) => {
        const isValid = type == 'less' && product.quantity == 0
        if (!isValid) {
            const newQtd = type == 'less' ? product.quantity - 1 : product.quantity + 1
            alterQuantity(product.id, parseInt(newQtd))
        }
    }

    const renderItems = ({ item }) => {
        const [valueFormattedWithSymbol, valueFormattedWithoutSymbol, symbol] = formatCurrency({ amount: Number(item.price).toFixed(2), code: 'BRL' })
        const [valueFormattedWithSymbolTotal] = formatCurrency({ amount: Number(item.price * item.quantity).toFixed(2), code: 'BRL' })

        return (
            <View key={item.id} style={styles.card}>
                <View style={styles.product}>
                    <Image source={{uri: item.image}} style={styles.photo} resizeMode='contain'/>
                    <View>
                        <Text style={styles.descriptionProduct}>{item.description.toString().trim()}</Text>
                        <Text style={styles.totalValueProduct}>{valueFormattedWithSymbol}</Text>
                    </View>
                </View>
                <View style={styles.quantity}>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity onPress={() => updateQuantity('less', item)}>
                            <Text style={styles.addRemove}> - </Text>
                        </TouchableOpacity>
                        <Text style={styles.input}>{item.quantity}</Text>
                        <TouchableOpacity onPress={() => updateQuantity('more', item)}>
                            <Text style={styles.addRemove}> + </Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.totalValueProduct}>{valueFormattedWithSymbolTotal}</Text>

                </View>
            </View>
        )
    }

    const foot = () => {
        const [valueFormattedWithSymbol, valueFormattedWithoutSymbol, symbol] = formatCurrency({ amount: Number(returnTotalCart).toFixed(2), code: 'BRL' })
        return (
            <View style={{marginTop: 15}}>
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
        <StatusBar style="light" />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#191920',
    },
    body: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 6,
        margin: 20,
        padding: 15
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
        borderRadius: 6
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
        alignItems: 'center',
    },
    total: {
        color: '#999999', 
        fontSize: 16, 
        lineHeight: 19, 
        fontWeight: '700',
        marginBottom: 10
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
        width: '50%',
        marginBottom: 5
    }, 
    totalValueProduct: {
        color: '#000000', 
        fontWeight: '700', 
        fontSize: 16, 
        lineHeight: 19, 
        marginRight: 10
    }, 
    quantity: {
        flexDirection: 'row', 
        alignItems: 'center', 
        flex: 1, 
        justifyContent: 'space-between', 
        borderRadius: 4,
        height: 43,
        backgroundColor: '#EEEEEE',
    },
    input: {
        backgroundColor: '#FFFFFF',
        textAlign: 'center',
        width: 51,
        height: 30,
        borderWidth: 1, 
        borderColor: '#DDDDDD',
        borderRadius: 4,
        padding: 5
    },
    addRemove: {
        fontSize: 20,
        lineHeight: 23,
        color: '#7159C1',
        width: 20,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 4
    }
});