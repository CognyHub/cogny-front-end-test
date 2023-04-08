import React from "react"
import { StyleSheet, Text, View, Image } from 'react-native'
import { Link } from "expo-router"

// assets
import logo from '../../assets/logo.png'
import bag from '../../assets/bag.png'

// store
import { useShoppingCartStore } from '../../../store/shoppingCart'

export default function Header() {
    const products = useShoppingCartStore(state => state.products)

    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Text style={styles.text}>COGNYSHOES</Text>
                <Image source={logo} style={styles.logoImg} />
            </View>
            <Link href="/shoppingCart">
                <View>
                    <Image source={bag} style={styles.logoImg} />
                    <View style={styles.badge}>
                        <Text style={styles.text}>{products.length}</Text>
                    </View>
                </View>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        marginTop: 40,
        paddingLeft: 20, 
        paddingRight: 30
    },
    text: {
        color: '#fff', 
        textAlign: 'right'
    }, 
    logo: {
        flexDirection: 'row',
    }, 
    logoImg: {
        marginLeft: 5
    }, 
    badge: {
        position: 'absolute', 
        top: -10, 
        right: -10, 
        backgroundColor: 'red', 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 50,
        width: 20, 
        height: 20
    }
});