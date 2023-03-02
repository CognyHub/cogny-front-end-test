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
      <div className="App">
         <p>{ produtos[0]?.data?.Produto }</p>
      </div>
    );
  }
  
  export default Content;
  