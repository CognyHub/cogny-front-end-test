import '../style/CardProduct.css'

function Card(img, product, description, price, click, key) {
  return (
   <div className='card' key={key}>
         <img
            className='product-image'
            src={img} 
            alt={`Imagem do tenis ${product}`}
        />
        <div className='text-container'>
           <p className='text-card'>{ description}</p>
           <p className='text-card price'>{ price }</p>
        </div>
         <div className='button-container'>
         <div className='quantity'>
            <span className='quantity-number'>1</span>
        </div>
         <button className='button' onClick={click}>Adicionar ao Carrinho</button>
         </div>
      </div>
  );
}

export default Card;
