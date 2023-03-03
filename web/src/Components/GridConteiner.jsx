import { useState, useEffect } from "react";
import styles from "./gridConteiner.module.css";

const ShoesApi =
  "https://api.mercadolibre.com/sites/MLB/search?q=iPhone&limit=20";

function GridConteiner() {
  const [products, setProducts] = useState([]);

  const getShoes = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setProducts(data.results);
  };

  useEffect(() => {
    getShoes(ShoesApi);
  }, []);

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
          <button>Adicionar Carrinho</button>
        </div>
      ))}
    </div>
  );
}

export default GridConteiner;
