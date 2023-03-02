import { useCart } from '../../../context/CartProvider';
import { Product } from '../../../types/product';
import { formatCurrency } from '../../../utils/currencyFormatter';
import { StyledProductCard, StyledProductCardButton } from './styles';

type ProductCardProps = {
  product: Product;
};

type SumCartItemsQuantity = {
  [key: string]: number;
};

export function ProductCard({ product }: ProductCardProps) {
  const { addProduct, cart } = useCart();

  const sumCartItemsQuantity = cart.reduce((sumAmount, product) => {
    sumAmount[product.id] = product.quantity;
    return sumAmount;
  }, {} as SumCartItemsQuantity);

  return (
    <StyledProductCard>
      <img src={product.image} alt={product.description} />
      <strong>{product.description}</strong>
      <span>{formatCurrency({ value: product.price })}</span>
      <StyledProductCardButton
        type="button"
        onClick={() => addProduct(product.id)}>
        <p>{sumCartItemsQuantity[product.id] ?? 0}</p>
        <span>ADICIONAR AO CARRINHO</span>
      </StyledProductCardButton>
    </StyledProductCard>
  );
}
