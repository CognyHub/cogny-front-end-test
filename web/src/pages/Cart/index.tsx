import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useCart } from '../../context/CartProvider';
import { useLiveStore } from '../../hooks/useLiveStore';
import { changeStockQuantity } from '../../services/dbService';

import { CartTable } from '../../components/CartTable';
import { StyledMain, StyledSuccessPurchase } from './styles';

export default function Cart() {
  const navigate = useNavigate();
  const { cart, setCart } = useCart();
  const [liveStock] = useLiveStore();

  const [isPurchaseFinished, setIsPurchaseFinished] = useState(false);

  const handleFinishOrder = async () => {
    try {
      await Promise.all(
        cart.map(async (product) => {
          const stock = liveStock.find(
            (stock) => stock.product_id === product.id
          );

          if (!stock) {
            throw new Error(`Produto ${product.description} fora de estoque.`);
          }

          await changeStockQuantity({
            stockId: stock.id,
            quantity: product.quantity,
          });
        })
      );
      setCart([]);

      setTimeout(() => navigate('/'), 3000);
      setIsPurchaseFinished(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <StyledMain>
      {isPurchaseFinished ? (
        <StyledSuccessPurchase>
          <h1>Compra realizada com sucesso!</h1>
          <span>Redirecionando para a página inicial...</span>
        </StyledSuccessPurchase>
      ) : (
        <CartTable handleFinishOrder={handleFinishOrder} />
      )}
    </StyledMain>
  );
}
