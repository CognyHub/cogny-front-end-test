import { useContext } from 'react';
import Context from '../../../context';
import Card from '../../molecules/home/Card';
import * as S from './styled';

export default function HomeOrganisms() {
  const { products, setProductsSelected, productsSelected } = useContext(Context);

  return (
    <S.Container>
      <S.Wrapper>
        {products?.map((product) => (
          <Card
            key={product.id}
            link={product.imageUrl}
            title={product.description}
            price={product.price}
            handleSelect={() => {
              setProductsSelected([...productsSelected, product.id]);
              localStorage.setItem('productsSelect', JSON.stringify([...productsSelected, product.id]));
            }}
            selected={
              productsSelected.filter((el) => el === product.id).length !== 0
            }
            qtd={productsSelected.filter((el) => el === product.id).length}
          />
        ))}
      </S.Wrapper>
    </S.Container>
  );
}
