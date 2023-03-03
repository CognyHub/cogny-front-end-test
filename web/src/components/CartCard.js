import { useState } from 'react';

function CartCard(img, product, description, price, quant) {
    const [ quantity,setQuantity ] = useState(quant || 0);
    const handleChange = (value) => {
          setQuantity(value)
        
    }
  return (
   <div className='cart-card'>
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
            onChange={(e) => handleChange(e.target.value)}
            />
        <p>{ quantity * price }</p>

      </div>
  );
}

export default CartCard;