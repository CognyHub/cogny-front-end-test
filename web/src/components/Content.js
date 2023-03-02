import { useEffect, useState } from 'react';
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from '../connection/firebaseConnection';

function Content() {

    const[produtos, setProdutos] = useState([]);

    useEffect(() =>{
        const response = query(collection(db, 'lojaDB'));
        onSnapshot(response,(querySnapshot) => {
            setProdutos(querySnapshot.docs.map(doc=>( {
                data: doc.data()
            })))
        })
        console.log(produtos);
    },[]);

    return (
      <div className="Content">
         <img 
            src={produtos[0]?.data?.image} 
            width='150px' 
            alt={`Imagem do tenis ${produtos[0]?.data?.product}`}
        />
         <p>{ produtos[0]?.data?.description }</p>
         <p>{ produtos[0]?.data?.price }</p>
         <button >Adicionar ao Carrinho</button>
      </div>
    );
  }
  
  export default Content;
  