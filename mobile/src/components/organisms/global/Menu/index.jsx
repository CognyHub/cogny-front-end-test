import { useContext } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Context from '../../../../context';
import { useNavigation } from '@react-navigation/native';

export default function Menu() {
  const { productsSelected } = useContext(Context);
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={styles.container}
    >
        <TouchableOpacity
          style={styles.touchabled}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.text}>COGNYSHOES </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchabled}
          onPress={() => navigation.navigate('ShoppingCart')}
        >
          <Text style={styles.text} >Meu carrinho</Text>
          <View>
            <Text style={styles.text}>{productsSelected.length}</Text>
            <Text style={styles.text}>itens</Text>
          </View>
        </TouchableOpacity>
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: '#fff',
    marginTop: 36,
    width: '100%'
  },
  text: {
    color: '#fff',
  },
  touchabled: {
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  }
});
