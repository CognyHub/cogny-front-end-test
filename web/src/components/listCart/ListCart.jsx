import React, { useEffect, useState } from 'react';
import logo from '../../Logo.svg';
import { useNavigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import getLocalStoreValue from '../../helpers/getLocalStoreValue';
import saveLocalStore from '../../helpers/saveLocalStore';
import './styleCart.css';
import { getFirestore,collection, addDoc, Timestamp } from 'firebase/firestore';




function ListCart() {  
  const [precoTotal , setPrecoTotal] = useState(0)
  const itens  = getLocalStoreValue();
  const navigate = useNavigate();
  const agora = Timestamp.now();

  const apiKey = process.env.REACT_APP_API_KEY;
  const apiAuthDomain = process.env.REACT_APP_AUTH_DOMAIN;
  const apiProjectId = process.env.REACT_APP_PROJECT_ID;
  const apiStorageBucket = process.env.REACT_APP_STORAGE_BUCKET;
  const messagingSenderId = process.env.REACT_APP_MESSAGING_SENDER_ID;
  const appId = process.env.REACT_APP_APP_ID;
  const measurementId = process.env.REACT_APP_MEASUREMENT_ID;

  const firebaseApp = initializeApp ({
    apiKey: apiKey,
    authDomain: apiAuthDomain,
    projectId: apiProjectId,
    storageBucket: apiStorageBucket,
    messagingSenderId: messagingSenderId,
    appId: appId,
    measurementId: measurementId,
  }) ;

  const db = getFirestore(firebaseApp)
  const comprasCollectionRef = collection(db, "compras");
  
  function returWhithCartIsEmpty() 
  {
    console.log('entre');
    if (itens.length === 0) {
      navigate("/");
    }
  }

  function handleChange(item, index, e) {
    let element = e.target.value;
    let novaQuantidade = Number(element);
    console.log(e.target.value);
    if (e.target.value < 1) {
      
      e.target.value = 1;
      return
    }

    let novoPreco = novaQuantidade * item.preco;
    
    setPrecoTotal(precoTotal - (item.quantidade * item.preco) + novoPreco);
    
    item.quantidade = novaQuantidade;
    saveLocalStore("itens", item);
  }
  
  
  async function buyCart()
  {
    await addDoc(comprasCollectionRef, {dia: agora.toDate(), preco: precoTotal , })

    localStorage.removeItem("itens");
    alert("compra realizada");
    navigate("/")
  }
  function updatePrecoTotal() 
  {
    let valor = 0;
    itens.forEach(item => {
       valor += item.preco * item.quantidade
      
    });
    setPrecoTotal(valor);
  }

  useEffect(()=>{
    updatePrecoTotal();
    returWhithCartIsEmpty();
  },[])
  
  return (
   <table className='list-cart'>
     <thead>
       <tr>
         <th className='1-c'></th>
         <th className='2-c'>Produto</th>
         <th className='3-c'>Quantidade</th>
         <th className='4-c'>Preço</th>
       </tr>
     </thead>
     <tbody>
       {itens.map((item, index) => (
         <tr key={index}>
           <td><img className='cart-img' src={item.url}></img></td>
           <td><p>{item.name}<br></br>R${item.preco}</p></td>
           <td><input id='qtn' defaultValue={1} onChange={(e) => handleChange(item,index, e)} type='number'  className='input-cart'></input></td>
           <td>{(item.preco * item.quantidade).toFixed(2)}</td>
           <hr></hr>
         </tr>
       ))}
     </tbody>
    <div className='footer'>
     <button onClick={buyCart} className='button-card list-cart-button'>
          Finalizar Pedido
        </button>
        <p className='left-place'>Total: preço: {precoTotal.toFixed(2)}</p>

      </div>
   </table>
  );
}

export default ListCart;
