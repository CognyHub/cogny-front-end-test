import React, { useContext, useState } from 'react';
import { About, AboutText, Container, Description, Price, ProductImg, QuantityDetails, QuantityInput, RemoveItemButton } from './styles';
import priceFormatter from '../../../helpers/priceFormatter';
import { CartContext } from '../../../contexts/cartContext';
import { Alert, TouchableOpacity } from 'react-native';
import trashBin from '../../../../assets/trashBin.png';

export default function CartProduct({ product }) {
  const { setTotalCartPrice, updateItem, removeItem } = useContext(CartContext);
  const [totalValueItem, setTotalValueItem] = useState(product.price * product.quantity);

  const handleOnDelete = () => {
      Alert.alert(
        "Remover item?",
        "tem certeza que deseja remover ítem?",
        [
          { text: "Cancelar", onPress: () => null },
          { text: "Remover", onPress: () => removeItem(product) },
        ]
      );
  };

  const onChangeInput = (newQuantity) => {
    const numberQuantity = Number(newQuantity);
    const oldTotalValueItem = totalValueItem;
    const newTotalValueItem = numberQuantity * product.price;

    updateItem(product, { quantity: numberQuantity });
    setTotalValueItem(newTotalValueItem);
    setTotalCartPrice((prevTotal) => prevTotal - oldTotalValueItem + newTotalValueItem);
  };

  return (
    <Container>
      <About>
        <ProductImg src={product.image_url} alt={product.description} />
        <AboutText>
          <Description> {product.description} </Description>
          <Price>{priceFormatter(product.price)}</Price>
        </AboutText>
      </About>
      <QuantityDetails>
        <QuantityInput
          keyboardType="numeric"
          value={product.quantity}
          onChangeText={(text) => onChangeInput(text)}
        >1</QuantityInput>
        <TouchableOpacity onPress={handleOnDelete}>
          <RemoveItemButton source={trashBin} />
        </TouchableOpacity>
        <Price>{priceFormatter(totalValueItem)}</Price>
      </QuantityDetails>
    </Container>
  );
}