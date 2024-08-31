import React from 'react';
import { About, Container, Description, ImageURL, Price } from './styles';
import AddToCardBtn from '../addToCartButton';
import priceFormatter from '../../helpers/priceFormatter';

export default function ProductCard({product}) {
  return (
    <Container>
      <ImageURL src={product.image_url}/>
      <About>
        <Description> {product.description} </Description>
        <Price> {priceFormatter(product.price)} </Price>
        <AddToCardBtn product={product} />
      </About>
    </Container>
  );
}
