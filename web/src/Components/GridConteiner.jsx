import { useState, useEffect } from "react";
import styles from "./gridConteiner.module.css";
import { Firebase } from "../firebase/Firebase";
import {BsFillCartDashFill,BsFillCartPlusFill} from 'react-icons/bs'


function GridConteiner() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([])

  useEffect(() => {
    async function getShoesList() {
      const shoes = await Firebase();
      setProducts(shoes);
    }
    getShoesList();
  }, []);

  const handleClick = (obj) => {
    const element = cart.find((e) => e.id === obj.id)
    if (element) {
      const arrFilter = cart.filter((e) => e.id !== obj.id);
      setCart(arrFilter);
    } else {
      setCart([...cart, obj]);
    }
  };

  return (
    <div className={styles.produtsConteiner}>
      {products.map((product) => (
        <div key={product.id} className={styles.produtsClass}>
          <img
            src={product.thumbnail}
            alt={product.title}
            className={styles.img}
          />
          <div>
            <h4>{product.title}</h4>
            <p>Preço: {(product.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}</p>
          </div>
            <div className={styles.btnCar}>
            <button className="button is-danger is-focused" onClick={() => handleClick(product)} >
              {cart.findIndex((itemCart) => itemCart.id === product.id) !== -1 ? (
                <div>Remover
                    <BsFillCartDashFill />
                </div>
              ) : (
                <div>Adicionar
                  <BsFillCartPlusFill />
                </div>                
              )}</button>
            </div>
        </div>
      ))}
    </div>
  );
}

export default GridConteiner;
