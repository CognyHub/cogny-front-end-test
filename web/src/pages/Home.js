// import { collection, getDocs } from 'firebase/firestore';
// import { db } from "../config/firebaseConnection";
// import { useEffect, useState } from 'react';
import { useState } from 'react';
import { useCart } from '../context/ProductsProvider';
import '../styles/Products.css'

function Home() {
  const { products, addProduct, message } = useCart();
  const [quantity, setQuantity] = useState(1)

  return (
    <div className='products'>
      <div className='message'>{(message && 'PRODUTO INSERIDO NO CARRINHO')}</div>
      {
        products.map((eachProduct) => {
          return (
            <div className='eachProduct' key={eachProduct.id}>
              <img className='eachImage'src={eachProduct.urlImage} alt={eachProduct.description}/>
              <h2 className='eachBrand'>{eachProduct.brand}</h2>
              <h3 className='eachDescription'>{eachProduct.description}</h3>
              <h3 className='eachPrice'>R$ {eachProduct.price},00</h3>
              <div className='buttonAndInput'>
                <label htmlFor="quantity">
                  <input
                    className='eachQuantity'
                    type="number"
                    id="quantity"
                    name="quantity"
                    value={ quantity }
                    onChange={ (e) => setQuantity(e.target.value) }
                  />
                </label>
                  
                <button
                  className='eachAddButton'
                  // disabled={}
                  type="button"
                  onClick={ () => addProduct(eachProduct) }
                  >
                    Adicionar ao carrinho
                </button>
              </div>

            </div>
        );
      })}
    </div>
  );
}

export default Home

