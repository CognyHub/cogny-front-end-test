import { useState } from "react";
import { getItem, setItem } from "../firebase/LocalStorage";
import styles from "./Cart.module.css";
import Swal from "sweetalert2";

function Cart() {
  const [data, setData] = useState(getItem("cart-store") || []);
  const [quantity, setQuantity] = useState({});

  const Remove = (obj) => {
    const arrFilterLocal = data.filter((e) => e.id !== obj.id);
    setData(arrFilterLocal);
    setItem("cart-store", arrFilterLocal);
  };

  const subtotal = data.reduce((acc, cur) => acc + (cur.price * (quantity[cur.id] || 1)), 0).toFixed(2);

  const handleChangeQuantity = (productId, value) => {
    setQuantity({
      ...quantity,
      [productId]: value
    });
  };

  const handleCheckout = () => {
    Swal.fire({
      position: 'top-center',
      icon: 'success',
      title: 'Pedido Finalizado...Obrigado! Volte Sempre ;)',
      showConfirmButton: false,
      timer: 2000
    })
    setData([]);
    setItem("cart-store", []);
  };

  return (
    <div className={styles.CartDashboard}>
      <div>
        {data.length > 0 ? (
          <>
          {data.map((product) => (
            <div key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <h3>{product.title}</h3>
              <h4>{product.price}</h4>
              <button onClick={() => Remove(product)}>Remove</button>
              <input
                  type="number"
                  min="1"
                  value={quantity[product.id] || 1}
                  onChange={(e) => handleChangeQuantity(product.id, e.target.value)}
                />
              <div>{`Preço: R$ ${((quantity[product.id]) || 1) * (product.price)}`}</div>
              </div>
          ))}
          <div>{`TOTAL: ${subtotal}`}</div>
          <button onClick={handleCheckout}>Finalizar Compra</button>
        </>
        ) : (
          <div>
            <div className={styles.noItem}>
            <h5>voce nao possui nenhum produto</h5>
            <h1>{`Subtotal: ${subtotal}`}</h1>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart;
