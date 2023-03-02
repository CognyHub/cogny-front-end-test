import { Product } from '../../types/product';
import { ProductCard } from './ProductCard';
import { StyledProductList } from './styles';

type ProductListProps = {
  products: Product[];
};

export function ProductList({ products }: ProductListProps) {
  return (
    <StyledProductList>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </StyledProductList>
  );
}
