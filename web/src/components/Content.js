import { useEffect, useState } from 'react';
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from '../connection/firebaseConnection';
import '../style/CardProduct.css'

function Content() {
    const[produtos, setProdutos] = useState([]);

    useEffect(() =>{
        const response = query(collection(db, 'lojaDB'));
        onSnapshot(response,(querySnapshot) => {
            setProdutos(querySnapshot.docs.map(doc=>( {
                data: doc.data()
            })))
        })
    },[]);

    return (
      <div className='card'>
         <img 
            src={produtos[0]?.data?.image} 
            width='100%' 
            alt={`Imagem do tenis ${produtos[0]?.data?.product}`}
        />
         <p className='text-card'>{ produtos[0]?.data?.description }</p>
         <p className='text-card price'>{ produtos[0]?.data?.price.toString().replace(".", ",") }</p>
         <div className='button-container'>
         <div className='quantity'>
            <span>1</span>
        </div>
         <button className='button'>Adicionar ao Carrinho</button>
         </div>
      </div>
    );
  }
  
  export default Content;
  