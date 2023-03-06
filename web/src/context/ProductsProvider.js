import { collection, getDocs } from 'firebase/firestore';
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { db } from "../config/firebaseConnection";
import '../styles/Products.css'

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState(false)
  
  const [cart, setCart] = useState(() => {
    const storageCart = localStorage.getItem('cart');
    if (storageCart) return JSON.parse(storageCart);
    return [];
  });
  
  const productsCollectionRef = collection(db, "Products")


  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(productsCollectionRef)
      setProducts(data.docs.map((eachDoc) => ({ ...eachDoc.data(), id: eachDoc.id })));
    };
    getProducts();
  },[]);


  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addProduct = useCallback((product) => {
    const productInCart = cart.find((cartItem) => cartItem.id === product.id);
    let quantity = 0
    if (!productInCart) {
      setCart((prevState) => [
        ...prevState,
        {
          id: product.id,
          brand: product.brand,
          description: product.description,
          quantity: quantity + 1,
          price: product.price,
          urlImage: product.urlImage,
          subTotal: (Number(product.price) * Number(quantity)),
        },
      ]);
    }
    if (productInCart) {
      setMessage(true)
      return setTimeout(() => setMessage(false), 1000) 
    }

  },[cart])

  const removeProduct = useCallback((product) => {
      const removeItem = cart.filter((eachCart) => eachCart.id !== product.id);
      setCart(removeItem)
  }, [cart])

  const contextValue  = useMemo(() => ({
    products,
    cart,
    setCart,
    setProducts,
    addProduct,
    message,
    removeProduct,
    setMessage,
  }), [products, setProducts, addProduct, cart, setCart, message, removeProduct, setMessage])

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsProvider;

export const useCart = () => {
  return useContext(ProductsContext)
}
