import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Header() {
    const navigation = useNavigation();
    return (
        <View style={styles.header}>
             <Pressable
                    onPress={() => navigation.navigate('Home')}
                >
            <View style={styles.logoContainer}>
                <Text style={styles.headerText}>CognyShoes</Text>
                <Image
                    source={require('../assets/icon.png')}
                    style={{ width: 30, height: 30 }}
                />
            </View>
            </Pressable>
            <View>
                <Pressable
                    onPress={() => navigation.navigate('Cart')}
                >
                    <Image
                        source={require('../assets/icons8-carrinho-de-compras-80 (1).png')}
                        style={{ width: 30, height: 30 }}
                    />            
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        backgroundColor: '#2E2E2E',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        height: '50px'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#FFF',
        letterSpacing: 1
    },
    logoContainer: {
        flexDirection: 'row',
    }
});

