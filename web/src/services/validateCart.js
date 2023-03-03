import { addCartCreator, errorCreator } from '../Redux/actions';

export default function validateCart(cart, product, dispacth) {
  console.log(cart);
  const haveEqual = cart.filter((item) => item.product.id === product.id);
  console.log(haveEqual);
  if (haveEqual.length === 0) return dispacth(addCartCreator({ product }));
  if (haveEqual.length > 0) return dispacth(errorCreator('Item ja existe no carrinho'));
}
