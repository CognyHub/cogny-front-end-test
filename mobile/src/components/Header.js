import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
// import { REACT_APP_API_KEY } from 'react-native-dotenv';


export default function Header() {
    return (
        <View style={styles.header}>
            <View style={styles.logoContainer}>
                <Text style={styles.headerText}>{REACT_APP_API_KEY}</Text>
                <Image
                    source={require('../assets/icon.png')}
                    style={{ width: 30 }}
                />
            </View>
            <View>
                <Text style={styles.headerText}>Cart</Text>
                <Text style={styles.headerText}>1</Text>
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
        paddingTop: 30,
        width: '100%',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#FFF',
        letterSpacing: 1
    },
});

