import { Image, StyleSheet, Text, TextInput, View } from "react-native";

export default function CartItem({ product }) {
  return (
    <View>
      <View style={styles.container}>
        <Image
          style={styles.image}
          resizeMode='cover'
          source={{uri: product.imgUrl}}
        />
        <View style={styles.wrapper}>
          <Text style={styles.text}>{product.description}</Text>
          <Text style={styles.price}>R$ {product.price}</Text>
        </View>
      </View>
        <View style={styles.totals}>
          <TextInput
            style={styles.input}
            // onChangeText={}
            value='3'
          />
          <Text style={styles.price}>R$ {product.price * product.qty}</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },

  image: {
    width: 80,
    height: 80,
    marginRight: 10,
  },

  wrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  text: {
    width: '100%',
    flexShrink: 1,
    fontSize: 14,
    fontFamily: 'Roboto',
    color: '#333',
    textTransform: 'capitalize',
    overflow: 'hidden',
  },

  price: {
    marginRight: 10,
    fontSize: 16,
    fontFamily: 'Roboto',
    fontWeight: '800',
    color: '#000',
  },

  totals: {
    height: 40,
    marginBottom: 10,
    backgroundColor: '#eee',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  input: {
    fontFamily: 'Roboto',
    fontSize: 14,
    marginLeft: 45,
    width: 51,
    height: 26,
    backgroundColor: '#fff',
    color: '#666',
    borderRadius: 4,
    textAlign: 'center',
  },

});
