import { createContext, useEffect, useState } from 'react';
import getCartItems from '../service/getCartProducts';
import Loading from '../components/loading';

const CartContext = createContext();

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalCartPrice, setTotalCartPrice] = useState(0);

  useEffect(() => {
    const fetchShoes = async () => {
      try {
        const shoesData = await getCartItems();
        setCartItems(shoesData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchShoes();
  }, []);

  if (loading) return <Loading />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <CartContext.Provider value={{
      cartItems,
      totalCartPrice,
      setTotalCartPrice,
    }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider, CartContext };
