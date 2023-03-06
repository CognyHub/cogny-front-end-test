import { Center, ScrollView } from 'native-base';
import { ProductCard } from './ProductCard';

export function ProductList({ products }) {
  return (
    <ScrollView backgroundColor={'gray.900'}>
      <Center>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Center>
    </ScrollView>
  );
}
