import Footer from '../../../molecules/ShoppingCart/TableCart/Footer';
import Header from '../../../molecules/ShoppingCart/TableCart/Header';
import Item from '../../../molecules/ShoppingCart/TableCart/Item';
import * as S from './styles';
import { useContext } from 'react';
import Context from '../../../../context';

export default function TableCart() {
  const { products, productsSelected, setProductsSelected } = useContext(Context);

  function calculateTotal() {
    let total = 0;
    
    products?.forEach((product) => {
      const amount = productsSelected.filter((el) => el === product.id).length;
      
      if (amount) {
        total += Number(amount) * Number(product.price);
      }
    })

    return total;
  }

  const total = calculateTotal();

  function removeItem(id) {
    const list = productsSelected

    list.splice(list.indexOf(id), 1)

    setProductsSelected([...list])
  }

  return (
    <S.Container>
      <S.Wrapper>
        <table style={{ width: '100%' }}>
          <Header />
          <tbody>
            {products?.map((product) => (
              <>
                {productsSelected.filter((el) => el === product.id).length !==
                  0 && (
                  <Item
                    key={product.id}
                    image={product.image}
                    title={product.description}
                    price={product.price}
                    qtd={
                      Number(productsSelected.filter((el) => el === product.id)
                        .length)
                    }
                    handleSub={() => removeItem(product.id)}
                    handleAdd={() =>
                      setProductsSelected([...productsSelected, product.id])
                    }
                    handleRemoveAll={() =>
                      setProductsSelected([
                        ...productsSelected.filter((el) => el !== product.id)
                      ])
                    }
                  />
                )}
              </>
            ))}
          </tbody>
        </table>
        <Footer total={total} />
      </S.Wrapper>
    </S.Container>
  )
}
