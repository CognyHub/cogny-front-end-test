import CartItem from './CartItem';

function Cart({ cart, onRemoveFromCart }) {
  const total = cart ? cart.reduce((acc, curr) => acc + curr.Price, 0) : 0;

  return (
    <div className='cart'>
      <h1>Cart</h1>
      {cart && cart.length > 0 ? (
        <>
          {cart.map(item => (
            <CartItem key={item.id} item={item} onRemove={onRemoveFromCart} />
          ))}
          <p>Total: ${total.toFixed(2)}</p>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

export default Cart;
