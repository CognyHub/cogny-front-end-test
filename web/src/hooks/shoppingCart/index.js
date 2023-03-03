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

  function removeItem(id) {
    const list = productsSelected;

    list.splice(list.indexOf(id), 1);

    setProductsSelected([...list]);
  }

  return { calculateTotal, removeItem, products, productsSelected, setProductsSelected };
}
