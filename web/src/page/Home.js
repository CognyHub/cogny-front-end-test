import { useEffect, useState } from 'react';
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from '../connection/firebaseConnection';
import '../style/Home.css'
import Card from '../components/Card';

function Home() {
    const[products, setProducts] = useState([]);

    useEffect(() =>{
        const response = query(collection(db, 'lojaDB'));
        onSnapshot(response,(querySnapshot) => {
            setProducts(querySnapshot.docs.map(doc=>( {
                data: doc.data()
            })))
        })
    },[]);

    return (
      <section className='main'>

         {products.map((product) => (
            Card(product.data.image,
                product.data.product,
                product.data.description,
                product.data.price.toFixed(2).toString().replace('.', ',')
                )
         ))}
      </section>
    );
  }
  
  export default Home;
  