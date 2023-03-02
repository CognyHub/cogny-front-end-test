import { useCart } from '../../context/CartProvider';

export default function Cart() {
  const { cart } = useCart();
  return (
    <div>
      {cart.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt={product.description} />
          <strong>{product.description}</strong>
          <span>{product.price}</span>
        </div>
      ))}
    </div>
  );
}
