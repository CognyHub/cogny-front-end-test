import '../style/CardProduct.css'

function Card(img, product, description, price, click) {
  return (
   <div className='card'>
         <img 
            src={img} 
            width='100%' 
            alt={`Imagem do tenis ${product}`}
        />
         <p className='text-card'>{ description}</p>
         <p className='text-card price'>{ price }</p>
         <div className='button-container'>
         <div className='quantity'>
            <span>1</span>
        </div>
         <button className='button' onClick={click}>Adicionar ao Carrinho</button>
         </div>
      </div>
  );
}

export default Card;
