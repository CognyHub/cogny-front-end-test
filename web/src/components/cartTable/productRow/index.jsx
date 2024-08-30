import React, { useContext, useState } from 'react';
import priceFormatter from '../../../helpers/priceFormatter';
import PropTypes from 'prop-types';

import {
  CartRow,
  ProductInfo,
  ProductImage,
  ProductTextInfo,
  ProductDescription,
  ProductPrice,
  Quantity,
  Price
} from './styles';
import { CartContext } from '../../../contexts/cartContext';
import ConfirmRemoveModal from '../../confirmRemoveModal';

function ProductRow({ product }) {
  const { setTotalCartPrice, updateItem, removeItem } = useContext(CartContext);
  const [totalValueItem, setTotalValueItem] = useState(product.price * product.quantity);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleQuantityChange = (newQuantity) => {
    const numberQuantity = Number(newQuantity);
    const oldTotalValueItem = totalValueItem;
    const newTotalValueItem = numberQuantity * product.price;

    if (numberQuantity === 0) {
      setIsModalOpen(true);
    } else {
      updateItem(product, { quantity: numberQuantity });
      setTotalValueItem(newTotalValueItem);
      setTotalCartPrice((prevTotal) => prevTotal - oldTotalValueItem + newTotalValueItem);
    }
  };

  const confirmRemoval = () => {
    removeItem(product);
    setTotalCartPrice((prevTotal) => prevTotal - totalValueItem);
    setIsModalOpen(false);
  };

  const cancelRemoval = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <ConfirmRemoveModal
        isOpen={isModalOpen}
        onClose={cancelRemoval}
        onConfirm={confirmRemoval}
      />

      <CartRow>
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
            min={0}
            value={product.quantity}
            onChange={(e) => handleQuantityChange(e.target.value)}
          />
        </Quantity>
        <Price>{priceFormatter(totalValueItem)}</Price>
      </CartRow>
    </>
  );
}

ProductRow.propTypes = {
  product: PropTypes.shape({
    product_id: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductRow;
