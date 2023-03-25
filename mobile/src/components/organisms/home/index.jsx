import Card from '../../molecules/home/Card';
import * as S from './styles';
import { useContext } from 'react';
import Context from '../../../context';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import Menu from '../global/Menu';

export default function HomeOrganisms() {
  const { products, productsSelected, setProductsSelected, loading } = useContext(Context);

  return (
    <S.Container>
        <Menu />
      <S.Wrapper>
      {!loading ? (
        <FlatList
            data={products}
            renderItem={({ item: { id, imageUrl, description, price } }) => {
              return (
                <Card
                  link={imageUrl}
                  title={description}
                  price={price}
                  handleSelect={() =>
                    setProductsSelected([...productsSelected, id])
                  }
                  selected={
                    productsSelected.filter((el) => el === id).length !== 0
                  }
                  qtd={productsSelected.filter((el) => el === id).length}
                />
              )
            }}
            keyExtractor={item => item.id}
          />
      ) : (
        <View style={styles.container}>
          <Text style={{color: 'white', fontSize: 32 }}>Loading...</Text>
        </View>
      )}
      </S.Wrapper>
    </S.Container>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: '100%',
    display: 'flex',
    justifyContent: 'center'
  },
});


