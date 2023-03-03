
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useShoppingCart } from '../../../../hook/shoppingCart';

export default function TableCart() {
  const { calculateTotal, products, setProductsSelected, productsSelected } = useShoppingCart();
  const navigation = useNavigation();
  const total = calculateTotal();

  return (
    <ScrollView>
        {products?.map((product, i) => {
          return (
            <View key={i}>
              {productsSelected.filter((el) => el === product.id).length !==
                0 && (
                  <View style={styles.item} key={product.id}>
                    <Image source={{ uri: product.imageUrl }} style={styles.imageContainer}/>

                    <Text style={styles.quantity}>
                      {`${Number(productsSelected.filter((el) => el === product.id)
                      .length)} produtos`}
                    </Text>

                    <Text style={styles.quantity}>
                      {`R$ ${(Number(productsSelected.filter((el) => el === product.id)
                        .length) * product.price).toFixed(2).replace('.', ',')}`}
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
          <Text style={styles.quantity}>
            {`R$ ${total.toFixed(2).replace('.', ',')}`}
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 32,
    paddingVertical: 8,
  },
  quantity: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    padding: 12,
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
    alignItems: 'center'
  },
  wapperButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  wapperButtonFinesh: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 160
  }
});

