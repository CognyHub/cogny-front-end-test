import { useEffect, useState } from 'react';
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from '../connection/firebaseConnection';
import '../style/Content.css'
import Card from './Card';

function Content() {
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
      <div className='main'>

         {products.map((product) => (
            Card(product.data.image,
                product.data.product,
                product.data.description,
                product.data.price
                )
         ))}
      </div>
    );
  }
  
  export default Content;
  