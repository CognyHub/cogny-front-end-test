import { Box, Card, Flex, Image, Text } from 'native-base';
import { memo, useEffect, useMemo, useState } from 'react';
import { useCart } from '../../context/CartProvider';
import { useLiveStore } from '../../hooks/useLiveStore';

function CartItem({ product }) {
  const { cart, setCart } = useCart();
  const [liveStock] = useLiveStore();

  const [updatedQuantity, setUpdatedQuantity] = useState(0);

  const handleStockCheck = () => {
    const stock = liveStock.find((stock) => stock.product_id === product.id);

    if (stock && stock.quantity < product.quantity) {
      setUpdatedQuantity(stock.quantity);

      const updatedCart = cart.map((product) => {
        if (product.id === stock.product_id) {
          return { ...product, quantity: stock.quantity };
        }
        return product;
      });

      setCart(updatedCart);
    }
  };

  useEffect(handleStockCheck, [liveStock, product.id, setCart]);

  const quantity = useMemo(
    () => updatedQuantity || product.quantity,
    [product.quantity, updatedQuantity]
  );

  const subtotal = useMemo(
    () => product.price * product.quantity,
    [product.price, product.quantity]
  );

  return (
    <Card
      shadow={0}
      display="flex"
      mx={'auto'}
      bg="#ffffff"
      flexDirection="column"
      style={{ marginBottom: 10 }}>
      <Flex flexDirection="row" mb={1}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: product.image,
          }}
          alt={product.description}
        />
        <Box
          ml={'10px'}
          flex={1}
          display="flex"
          flexDirection="column"
          justifyContent={'center'}>
          <Text color="#333333" lineHeight={18}>
            {product.description}
          </Text>
          <Text fontSize={16} bold pt="4px">
            {product.priceFormatted}
          </Text>
        </Box>
      </Flex>
      <Flex
        flexDirection="row"
        w="full"
        h="40px"
        bg="#EEEEEE"
        justifyContent={'center'}
        p={2}
        textAlign="center">
        <Text px={5} bg="white" ml={'35px'} borderRadius={'3px'}>
          {quantity}
        </Text>
        <Text flex={1} textAlign="right" bold>
          {subtotal}
        </Text>
      </Flex>
    </Card>
  );
}

const styles = {
  tinyLogo: {
    width: 80,
    height: 80,
    objectFit: 'contain',
  },
};

export default memo(CartItem);
