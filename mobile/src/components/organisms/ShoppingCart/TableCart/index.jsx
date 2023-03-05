
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useShoppingCart } from '../../../../hook/shoppingCart';
import { formatedValue } from '../../../../utils';

export default function TableCart() {
  const { calculateTotal, products, setProductsSelected, productsSelected } = useShoppingCart();
  const navigation = useNavigation();
  const total = calculateTotal();

  return (
    <ScrollView>
      <View style={styles.container}>
        {products?.map((product, i) => {
          return (
            <View key={i}>
              {productsSelected.filter((el) => el === product.id).length !==
                0 && (
                  <View style={styles.item} key={product.id}>
                    <Image source={{ uri: product.imageUrl }} style={styles.imageContainer}/>

                    <Text style={styles.description}>
                      {`${Number(productsSelected.filter((el) => el === product.id)
                      .length)} produtos`}
                    </Text>

                    <Text style={styles.quantity}>
                      {`R$ ${formatedValue(Number(productsSelected.filter((el) => el === product.id)
                        .length) * product.price)}`}
                    </Text>


                    <View style={styles.wapperButton}>
                      <TouchableOpacity
                        style={styles.touchabled}
                        onPress={() => {
                          setProductsSelected([
                            ...productsSelected.filter((el) => el !== product.id)
                          ])
                        }}
                      >
                        <Text style={styles.button}>Excluir</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
              )}
            </View>
          )
        })}

        <View style={styles.wapperButtonFinesh}>
          <Text>Total</Text>
          <Text style={styles.total}>
            {`R$ ${formatedValue(total)}`}
          </Text>
          <TouchableOpacity
            style={styles.touchabled}
            onPress={() => {
              navigation.navigate('Purchasemade');
              setProductsSelected([]);
            }}
          >
            <Text style={styles.buttonFinesh}>Finalizar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 36,
    borderRadius: 4
  },
  imageContainer: {
    alignSelf: 'center',
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  description: {
    fontSize: 16,
    paddingHorizontal: 32,
    paddingVertical: 8,
    color: 'black'
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 32,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'lightgray',
    borderRadius: 5,
  },
  quantity: {
    width: '100%',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#272626',
    textAlign: 'center',
    padding: 12,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'lightgray',
    padding: 10,
    borderRadius: 5,
  },
  total: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 32,
    paddingVertical: 8,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#f8375d',
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    alignSelf: 'center',
    textAlign: 'center',
    padding: 8,
    width: '40%',
  },
  buttonFinesh: {
    backgroundColor: '#f8375d',
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    alignSelf: 'center',
    textAlign: 'center',
    padding: 8,
    width: '80%',
  },
  touchabled: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 16,
    padding: 8,
  },
  item: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wapperButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderBottom: '10px solid ',
  },
  wapperButtonFinesh: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  }
});

