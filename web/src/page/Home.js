import { useContext, useEffect, useState } from 'react';
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from '../connection/firebaseConnection';
import CartContext from '../context/CartContext';
import '../style/Home.css'
import Card from '../components/Card';

function Home() {
    const[products, setProducts] = useState([]);
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
      <section className='main'>
         {products.map((product) => (
            Card(product.data.image,
              product.data.product,
              product.data.description,
              product.data.price.toFixed(2).toString().replace('.', ','),
              () => handleClick(product.data, product.data.product),
              product.data.product
                )
         ))}
      </section>
    );
  }
  
  export default Home;
  