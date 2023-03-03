import React from 'react';

import './styleCard.css';

function card({ url , name , preco}) {
    console.log(url,name,preco);
  return (
    <div className='card'>
        <img src={url} className='card-img' />
        <p className='name-card'>{name}</p>
        <span className='value-card'>R${preco}</span>
        <button className='button-card'>
            <div className='box-button-card'>
                <span>1</span>
            </div>
            <span>Adcionar ao carrinho</span>
        </button>
    </div>
  );
}

export default card;