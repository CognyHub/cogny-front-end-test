import React, { useContext, useEffect, useState } from 'react';
import NavBar from '../components/NavBar.js';
import { SaleContext } from '../context/SaleContext.js';
import { saveSale } from '../firebase/sales.js';
import styles from './Cart.module.css';
import CartCard from '../components/CartCard.js';

export default function Cart() {
  const { itens, setItens, local } = useContext(SaleContext);
  const [total, setTotal] = useState(0);

  const onClick = async () => {
    try {
      await saveSale(itens, total).then(() => {
        alert('Sua pedido foi realizado com sucesso');
      });
      localStorage.removeItem(local);
      setItens([]);
    } catch (e) {
      console.log(e);
      alert('Erro. Por uma falha do sistema, seu pedido não foi registrado');
    }
  };

  useEffect(() => {
    const calculateTotal = () => {
      const sum = itens.reduce((acc, crr) => {
        acc += (crr.price * crr.quantity);
        return acc;
      }, 0);

      setTotal(sum);
    };

    calculateTotal();
  }, [itens]);

  return (
    <div>
      <NavBar />
      <main className={ styles.container }>
        {
          itens.length > 0 && (
            <div className={ styles.header }>
              <h3>PRODUTO</h3>
              <h3>QTD</h3>
              <h3>PREÇO</h3>
            </div>
          )
        }
        {
          itens.length > 0 ? (
            itens.map((p, id) => (
              <CartCard key={ id } product={ p } id={ id } />
            ))
          ) : (
            <h1>Ainda sem produtos no carrinho!</h1>
          )
        }
        {
          itens.length !== 0 && (
            <div className={ styles.bottom }>
              <button onClick={ onClick }>
                FINALIZAR PEDIDO
              </button>
              <div>
                <p>TOTAL</p>
                <h2>{`R$ ${total.toFixed(2).replace('.', ',')}`}</h2>
              </div>
            </div>
          )
        }
      </main>
    </div>
  );
}
