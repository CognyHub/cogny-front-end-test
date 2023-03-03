import { useContext } from "react";
import Context from "../../context";

export function useShoppingCart() {
  const { products, setProductsSelected, productsSelected } = useContext(Context);

  function calculateTotal() {
    let total = 0;

    products?.forEach((product) => {
      const amount = productsSelected.filter((el) => el === product.id).length;

      if (amount) {
        total += Number(amount) * Number(product.price);
      }
    });

    return total;
  }
  return { calculateTotal, products, productsSelected, setProductsSelected };
}
