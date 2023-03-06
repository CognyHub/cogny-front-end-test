import { useState } from "react";
import { getItem, setItem } from "../firebase/LocalStorage";
import styles from "./Cart.module.css";
import Swal from "sweetalert2";
import { useButtonReload } from "../Components/Reload";


function Cart() {
  const [data, setData] = useState(getItem("cart-store"));
  const [quantity, setQuantity] = useState({});
  const handleButtonClick = useButtonReload();

  const Remove = (obj) => {
    const arrFilterLocal = data.filter((e) => e.id !== obj.id);
    setData(arrFilterLocal);
    setItem("cart-store", arrFilterLocal);
    handleButtonClick()
  };

  const subtotal = data
    .reduce((acc, cur) => acc + cur.price * (quantity[cur.id] || 1), 0)
    .toFixed(2);

  const handleChangeQuantity = (productId, value) => {
    setQuantity({
      ...quantity,
      [productId]: value,
    });
  };

  const handleCheckout = () => {
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Pedido Finalizado...Obrigado! Volte Sempre ;)",
      showConfirmButton: false,
      timer: 2000,
    }).then(() => {
      setData([]);
      setItem("cart-store", []);
      handleButtonClick()
    })
   };

  return (
    <div className= {styles.ProductCart}>
      <div>
        
        {data.length > 0 ? (
          <div className={styles.ProductConteiner}>
           <div  className={styles.productHeader}>
                <div className={styles.productHeaderItem}>
                    <h4>PRODUTO</h4>
                </div>
                <div>
                    <h4>QTD</h4>
                </div>
                <div>
                    <h4>PREÇO</h4>
                </div>
              </div>
            {data.map((product) => (  
              <div key={product.id} className={styles.productCart}>
                <div className={styles.thumbName}>
                <img src={product.thumbnail} alt={product.title} />
                 </div>  
                 <div className={styles.legends}>
                  <h5>{product.title}</h5>
                  <h4>{`R$: ${product.price}`}</h4>
                 </div>
                <button  className='button is-danger is-focused' onClick={() => Remove(product)}>Remove</button>
                <input className={styles.quantity}
                  type="number"
                  min="1"
                  value={quantity[product.id] || 1}
                  onChange={(e) =>
                    handleChangeQuantity(product.id, e.target.value)
                  }
                />
                <div className={styles.priceFinal}>
                {`R$${
                  (quantity[product.id] || 1) * product.price
                }`}</div>
              </div>
            ))}
             <div className={styles.Subtotal}>
              <button className='button is-danger is-focused' onClick={handleCheckout}>Finalizar Compra</button>
              <div className={styles.total}>{`TOTAL: R$ ${subtotal}`}</div>
            </div>
           
          </div>
        ) : (
          <div  className={styles.noItem}>
            <div className={styles.emptyCar}>
              <div  className={styles.productHeader}>
                <div className={styles.productHeaderItem}>
                    <h4>PRODUTO</h4>
                </div>
                <div>
                    <h4>QTD</h4>
                </div>
                <div>
                    <h4>PREÇO</h4>
                </div>
              </div>
              <div className={styles.emptyMessage}>
                <img src="https://sheinsz.ltwebstatic.com/she_dist/images/shoppingcart-empty-50eb82fb72.png" alt="" />
                 <h5>Oops!!, seu carrinho está vazio</h5>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
