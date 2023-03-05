import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView  } from 'react-native';
import { db } from '../connection/firebaseConnection';
import { collection, query, onSnapshot,  } from "firebase/firestore";
import Card from '../components/Card';

export default function Home() {
  const [products, setProducts] = useState([]);
  
  useEffect(() =>{
    const response = query(collection(db, 'lojaDB'));
    onSnapshot(response,(querySnapshot) => {
        setProducts(querySnapshot.docs.map(doc=>( {
            data: doc.data()
        })));
    });
},[]);

    return (
      <ScrollView style={styles.main}>
      <View style={styles.home}>
        { products.map((x)=> (
          Card(
            x?.data?.image,
            x?.data?.description,
            x?.data?.price
            ))
        )} 
      </View>
      </ScrollView>
    );
  }

  const styles = StyleSheet.create({
    home: {
      alignItems: 'center',
      backgroundColor: '#2E2E2E',
      display: 'flex',
    },
    main: {
      width: '100%'
    }
});