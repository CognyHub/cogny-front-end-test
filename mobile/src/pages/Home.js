import React, { useState, useEffect, useContext} from 'react';
import { View, StyleSheet, ScrollView  } from 'react-native';
import { db } from '../connection/firebaseConnection';
import { collection, query, onSnapshot,  } from "firebase/firestore";
import CartContext from '../context/CartContext';
import Card from '../components/Card';

export default function Home() {
  const [products, setProducts] = useState([]);
  const { orders, setOrders } = useContext(CartContext);
  
  useEffect(() =>{
    const response = query(collection(db, 'lojaDB'));
    onSnapshot(response,(querySnapshot) => {
        setProducts(querySnapshot.docs.map(doc=>( {
            data: doc.data()
        })));
    });
},[]);

const handleClick = (product) =>{
  if (!(orders.some((x)=> x.product === product.product))){
      setOrders((old)=> [...old, {...product, quantity: 1}]);
   } 
}

    return (
      <ScrollView style={styles.main}>
      <View style={styles.home}>
        { products.map((product)=> (
          Card(
            product?.data?.image,
            product?.data?.description,
            product?.data?.price,
            () => handleClick(product.data),
            product.data.product
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