import { Card, Image, Text } from 'native-base';
import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { Product } from '../../../@types/product';
import { currencyFormatter } from '../../../utils/currencyFormatter';
import { CardButton } from './CardButton';

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const formattedPrice = useMemo(
    () => currencyFormatter({ value: product.price }),
    [product.price]
  );

  return (
    <Card
      bg="#ffffff"
      borderRadius="4px"
      w="338px"
      h="378px"
      alignItems="center"
      mb="15px">
      <Image
        source={{ uri: product.image }}
        style={styles.imageCard}
        alt={product.description}
      />
      <Text fontSize="16px" fontWeight="bold" mt="10px" w="285px">
        {product.description}
      </Text>
      <Text
        fontSize="21px"
        fontWeight="bold"
        mt="10px"
        ml="15px"
        alignSelf="flex-start">
        {formattedPrice}
      </Text>
      <CardButton product={product} />
    </Card>
  );
}

const styles = StyleSheet.create({
  imageCard: {
    width: 217,
    height: 200,
    objectFit: 'contain',
  },
});
