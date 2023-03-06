import { Box, Button, Flex, Text } from 'native-base';
import { memo, useCallback, useMemo } from 'react';
import { useCart } from '../../context/CartProvider';
import { useLiveStore } from '../../hooks/useLiveStore';
import { changeStockQuantity } from '../../service/dbService';
import { currencyFormatter } from '../../utils/currencyFormatter';
import CartItem from '../CartItem';

function CartBody() {
  const { cart, setCart } = useCart();
  const [liveStock] = useLiveStore();

  const handleFinishOrder = useCallback(async () => {
    const promises = cart.map(async (product) => {
      const stock = liveStock.find((stock) => stock.product_id === product.id);

      if (!stock) {
        throw new Error(`Produto ${product.description} fora de estoque.`);
      }

      await changeStockQuantity({
        stockId: stock.id,
        quantity: product.quantity,
      });
    });

    try {
      await Promise.all(promises);
      setCart([]);
    } catch (error) {
      console.error(error);
    }
  }, [cart, liveStock, setCart]);

  const total = useMemo(() => {
    return currencyFormatter({
      value: cart.reduce(
        (acc, { price, quantity }) => acc + price * quantity,
        0
      ),
    });
  }, [cart]);

  const formattedCart = useMemo(
    () =>
      cart.map(({ id, price, quantity, ...rest }) => ({
        id,
        price,
        quantity,
        priceFormatted: currencyFormatter({ value: price }),
        subtotal: currencyFormatter({ value: price * quantity }),
        ...rest,
      })),
    [cart]
  );

  return (
    <Box borderRadius={8} bg="#ffffff" pb={2} w="full" mb={10}>
      {formattedCart.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}

      <Flex flexDirection="column" alignItems="center" alignSelf="center" p={2}>
        <Text color="#999999">TOTAL</Text>
        <Text color="black" bold fontSize={30}>
          {total}
        </Text>
      </Flex>

      <Button
        disabled={!cart.length}
        onPress={handleFinishOrder}
        mb={30}
        mx={10}
        bg="#F8375D"
        _pressed={{ bg: 'rgba(0, 0, 0, 0.2)' }}>
        <Text color="white" bold>
          FINALIZAR PEDIDO
        </Text>
      </Button>
    </Box>
  );
}

export default memo(CartBody);
