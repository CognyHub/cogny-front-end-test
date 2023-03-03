import React, { useEffect, useState } from 'react';
import logo from '../../Logo.svg';
import { useNavigate } from 'react-router-dom';
import getLocalStoreValue from '../../helpers/getLocalStoreValue';
import saveLocalStore from '../../helpers/saveLocalStore';
import './styleCart.css';




function ListCart() {  
  const [precoTotal , setPrecoTotal] = useState(0)
  const itens  = getLocalStoreValue();
  const navigate = useNavigate();

  
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
      console.log("atingiu 0");
      e.target.value = 1;
      return
    }

    let novoPreco = novaQuantidade * item.preco;
    
    setPrecoTotal(precoTotal - (item.quantidade * item.preco) + novoPreco);
    
    item.quantidade = novaQuantidade;
    saveLocalStore("itens", item);
  }
  

  function buyCart()
  {
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
