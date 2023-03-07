import { Button, Flex, Text } from 'native-base';
import { useMemo } from 'react';
import { SumCartItemsQuantity } from '../../../@types/cart';
import { Product } from '../../../@types/product';
import { useCart } from '../../../context/CartProvider';
import { useLiveStore } from '../../../hooks/useLiveStore';

type CardButtonProps = {
  product: Product;
};

export function CardButton({ product: { id } }: CardButtonProps) {
  const { addProduct, cart } = useCart();
  const [liveStock] = useLiveStore();

  const sumCartItemsQuantity = useMemo(() => {
    return cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.quantity;
      return sumAmount;
    }, {} as SumCartItemsQuantity);
  }, [cart, liveStock]);

  return (
    <Button
      onPress={() => addProduct(id)}
      _pressed={{ bg: 'transparent' }}
      w="full"
      bg={'transparent'}
      color="white">
      <Flex
        bg={'#f8375d'}
        direction="row"
        justifyContent="space-between"
        overflow={'hidden'}
        borderRadius={'5px'}
        w="307px">
        <Text
          px={'40px'}
          py={'10px'}
          bg={'rgba(0, 0, 0, 0.2);'}
          color="white"
          fontWeight="bold">
          {sumCartItemsQuantity[id] ?? 0}
        </Text>
        <Text
          flex={1}
          color="white"
          textAlign="center"
          alignSelf={'center'}
          fontWeight="bold">
          ADICIONAR
        </Text>
      </Flex>
    </Button>
  );
}
