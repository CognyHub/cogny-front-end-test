import React, { useContext, useEffect, useState } from 'react';
import priceFormatter from '../../../helpers/priceFormatter';

import {
  ProductRow,
  ProductInfo,
  ProductImage,
  ProductTextInfo,
  ProductDescription,
  ProductPrice,
  Quantity,
  Price
} from './styles';
import { CartContext } from '../../../contexts/cartContext';

function CartRow({ product }) {
  const { setTotalCartPrice, totalCartPrice } = useContext(CartContext);
  const [productQuantity, setProductQuantity] = useState(1);
  const [totalValueItem, setTotalValueItem] = useState(product.price);

  useEffect(() => {
    if (!totalCartPrice) setTotalCartPrice(Number(product.price))
  }, []);

  const handleQuantityChange = (quantity) => {
    const newQuantity = parseInt(quantity, 10);
    const newTotalValueItem = product.price * newQuantity;

    setProductQuantity(newQuantity);
    setTotalValueItem(newTotalValueItem);
    
    const priceDifference = newTotalValueItem - totalValueItem;
    setTotalCartPrice(totalCartPrice + priceDifference);
  }

  return (
    <ProductRow>
      <ProductInfo>
        <ProductImage src={product.image_url} alt={product.description} />
        <ProductTextInfo>
          <ProductDescription>{product.description}</ProductDescription>
          <ProductPrice>{priceFormatter(product.price)}</ProductPrice>
        </ProductTextInfo>
      </ProductInfo>
      <Quantity>
        <input
          type='number'
          min={1}
          value={productQuantity}
          onChange={(e) => handleQuantityChange(e.target.value)}
        />
      </Quantity>
      <Price>{priceFormatter(totalValueItem)}</Price>
    </ProductRow>
  );
};

export default CartRow;
