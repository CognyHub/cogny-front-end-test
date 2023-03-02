import Card from '../../molecules/home/Card';
import * as S from './styled';
import { useContext } from 'react';
import Context from '../../../context';

export default function HomeOrganisms() {
  const { products, productsSelected, setProductsSelected } = useContext(Context);

  return (
    <S.Container>
      <S.Wrapper>
        {products?.map((product) => (
          <Card
            key={product.id}
            link={product.image}
            title={product.description}
            price={product.price}
            handleSelect={() =>
              setProductsSelected([...productsSelected, product.id])
            }
            selected={
              productsSelected.filter((el) => el === product.id).length !== 0
            }
            qtd={productsSelected.filter((el) => el === product.id).length}
          />
        ))}
      </S.Wrapper>
    </S.Container>
  )
}
