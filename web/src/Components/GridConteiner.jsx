import { useState, useEffect } from "react";
import styles from "./gridConteiner.module.css";
import { Firebase } from "../firebase/Firebase";
import { getItem, setItem } from "../firebase/LocalStorage";
import { useButtonReload } from "./Reload";
import Swal from 'sweetalert2'


function GridConteiner() {
  const handleButtonClick = useButtonReload();
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(getItem('cart-store') || [])

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
      Swal.fire({
        position: 'top-center',
        icon: 'error',
        title: 'Este Item já foi adicionado',
        showConfirmButton: false,
        timer: 1500
      })
 
    } else {
      setCart([...cart, obj]);
      setItem('cart-store',[...cart,obj])
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Item adicionado',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        handleButtonClick()
      })
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
                <div>Adicionar</div>                
              </button>
            </div>
        </div>
      ))}
    </div>
  );
}

export default GridConteiner;
