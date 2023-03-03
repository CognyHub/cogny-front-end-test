import React from 'react';

import './styleCard.css';

function card({ id ,Cart ,setCart ,url , name , preco}) {

  function verifyDuplicate(itens,newItem)
  {
    const existProduct = itens.some(
      item => item.url === newItem.url && item.nome === newItem.nome && item.preco === newItem.preco
    );

    return existProduct;
  }

  function addCart() 
  {
    const newCart = {
      name,
      url,
      preco,
      id,
      quantidade: 1
    }
    let itens = [];

    if (Cart) {
      itens = [...Cart]  
    }
    const isDuplicate = verifyDuplicate(itens,newCart);

    if (isDuplicate) {
      alert("item já incluso em seu carrinho")
      return; 
    }
    setCart([...Cart,newCart]);
  }
  return (
    <div className='card'>
        <img src={url} className='card-img' />
        <p className='name-card'>{name}</p>
        <span className='value-card'>R${preco}</span>
        <button onClick={addCart} className='button-card'>
            <div className='box-button-card'>
                <span>{verifyDuplicate(Cart,{name,url,preco}) ? 1 : 0}</span>
            </div>
            <span>Adcionar ao carrinho</span>
        </button>
    </div>
  );
}

export default card;