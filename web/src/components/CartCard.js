import { useState, useContext, useEffect } from 'react';
import CartContext from '../context/CartContext';
import '../style/CardCart.css'


function CartCard(img, product, description, price, quant, key) {
  const [quantity, setQuantity] = useState(quant || 0);
  const { setTotal, total } = useContext(CartContext);
  const { orders } = useContext(CartContext);

  useEffect(() => {
    const totalPrice = orders.reduce((total, valor) => total + valor.price, 0);
    setTotal(totalPrice);
  }, [orders, setTotal]);

  const handleChange = (value) => {
    setQuantity(value)
    setTotal((old) => old += price)
    }
  
  return (
    <div className='cart-card' key={key}>
      <div className='left-container'>
        <img
          className='image-cart'
          src={img}
          alt={`Imagem do tenis ${product}`}
        />
        <div className='text-cart'>
          <p>{description} </p>
          <p className='price-cart'>
            {`R$${price?.toFixed(2).toString().replace('.', ',')}`}
            </p>
        </div>
      </div>
      <div className='right-container'>
      <input
        className='input-cart'
        type='number'
        min='1'
        value={quantity}
        onChange={(e) => handleChange(e.target.value, e.target.value * price)}
      />
      <p className='total-price'>
        {`R$${(quantity * price)?.toFixed(2).toString().replace('.', ',')}`}
      </p>

      </div>
    </div>
  );
}

export default CartCard;