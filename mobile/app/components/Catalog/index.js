import React, { useEffect } from "react"
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'

// firebase
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../../firebaseConfig';

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

    const renderItems = ({ item, index }) => {
        const quantity = products.find(product => item.id === product.id)?.quantity || 0
        return (
            <View key={index} style={styles.card}>
                <Image source={{uri: item.image}} style={styles.photo} accessibilityLabel={item.product} />
                <Text style={styles.descriptionProduct}>{item.description}</Text>
                <Text>{item.price.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</Text>
                <TouchableOpacity onPress={() => increaseProduct(item)}>
                    <Text>{quantity}</Text>
                    <Text>ADICIONAR AO CARRINHO</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return <View style={styles.container}>
        <FlatList
            data={listProducts}
            renderItem={renderItems}
            keyExtractor={({ id }) => id}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: "center",
      padding: 20
    },
    descriptionProduct: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 21,
        color: '#333333'
    }, 
    logo: {
        flexDirection: 'row',
    }, 
    logoImg: {
        marginLeft: 5
    },
    card: {
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
});