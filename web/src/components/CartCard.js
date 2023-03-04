import { useState, useContext,useEffect } from 'react';
import CartContext from '../context/CartContext';

function CartCard(img, product, description, price, quant, key) {
    const [ quantity,setQuantity ] = useState(quant || 0);
     const { setTotal } = useContext(CartContext);
     const { orders } = useContext(CartContext);

     useEffect(() =>{
      const totalPrice = orders.reduce((total, valor) => total + valor.price,0);
      setTotal( totalPrice);
    },[orders, setTotal]);

    const handleChange = (value) => {
          setQuantity(value)
          setTotal((old) => old += price)
    }

  return (
   <div className='cart-card'  key={key}>
         <img 
            src={img} 
            width='30px' 
            alt={`Imagem do tenis ${product}`}
        />
        <p>{ description } </p>
        <p>{ price }</p>
        <input
            type='number' 
            min='1'
            value= {quantity}
            onChange={(e) => handleChange(e.target.value, price)}
            />
        <p className='total-price'>{ quantity * price }</p>
      </div>
  );
}

export default CartCard;