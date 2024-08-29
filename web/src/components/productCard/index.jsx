import React from 'react';
import { About, Alignment, Container, Description, ImageURL, Price } from './styles';
import AddToCardBtn from '../button';

function ProductCard({product}) {
  // TODO: ajustar valor com um método helper

  return (
    <Container>
      <Alignment>
        <ImageURL src={product.image_url}/>
        <About>
          <Description> {product.description} </Description>
          <Price> {`R$ ${product.price}`} </Price>
         </About>
        <AddToCardBtn num='1' />
      </Alignment>
    </Container>
  );
}

export default ProductCard;
