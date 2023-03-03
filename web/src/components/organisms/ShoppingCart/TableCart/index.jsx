import Footer from '../../../molecules/ShoppingCart/TableCart/Footer';
import Header from '../../../molecules/ShoppingCart/TableCart/Header';
import Item from '../../../molecules/ShoppingCart/TableCart/Item';
import { useShoppingCart } from '../../../../hooks/shoppingCart';
import * as S from './styles';

export default function TableCart() {
  const { calculateTotal, products, setProductsSelected, productsSelected } = useShoppingCart();

  return (
    <S.Container>
      <S.Wrapper>
        <table style={{ width: '100%' }}>
          <Header />
          <tbody>
            {products?.map((product) => (
              <>
                {productsSelected && productsSelected?.filter((el) => el === product.id).length !==
                  0 && (
                  <Item
                    key={product.id}
                    image={product.imageUrl}
                    title={product.description}
                    price={product.price}
                    qtd={productsSelected &&
                      Number(productsSelected?.filter((el) => el === product.id)
                        .length)
                    }
                    handleRemoveAll={() => {
                      setProductsSelected([
                        ...productsSelected.filter((el) => el !== product.id)
                      ]);
                      localStorage.setItem('productsSelect', JSON.stringify([
                        ...productsSelected.filter((el) => el !== product.id)
                      ]));
                    }}
                  />
                )}
              </>
            ))}
          </tbody>
        </table>
        <Footer total={calculateTotal()} />
      </S.Wrapper>
    </S.Container>
  );
}
