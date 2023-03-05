import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { formatedValue } from '../../../../utils';

export default function Card({
  link,
  title,
  handleSelect,
  price,
  qtd,
  selected
}) {

  return (
    <View style={styles.containerInternal}>
      <Image source={{ uri: link }} style={styles.imageContainer}/>
      <View style={styles.alignTexts}>
        <Text style={styles.description}>{title}</Text>
        <View style={styles.alignTexts}>
          <Text style={styles.price}>{`R$ ${formatedValue(price)}`}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.touchabled}
        onPress={handleSelect}
        disabled={selected}
      >
        <Text style={styles.quantity}>{qtd}</Text>
        <Text style={styles.button}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  containerInternal: {
    backgroundColor: 'white',
    margin: 8,
    borderRadius: 4,
    display: 'flex',
    justifyContent: 'center',
    padding: 32,
  },
  imageContainer: {
    alignSelf: 'center',
    height: 180,
    width: 180,
    resizeMode: 'contain',
  },
  description: {
    fontSize: 16,
    marginTop: 12
  },
  price: {
    width: '100%',
    fontSize: 16,
    fontWeight: 'bold',
  },
  quantity: {
    backgroundColor: '#c62c4a',
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    flexGrow: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    padding: 8,
  },
  touchabled: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 26
  },
  button: {
    width: 220,
    backgroundColor: '#f8375d',
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    flexGrow: 4,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    alignSelf: 'center',
    textAlign: 'center',
    padding: 8,
  },
  alignTexts: {
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center'
  }
});
