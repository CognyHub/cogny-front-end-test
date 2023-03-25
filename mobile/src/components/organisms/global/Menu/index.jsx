import { useContext } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Context from '../../../../context';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Menu() {
  const { productsSelected } = useContext(Context);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.text}>COGNYSHOES </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ShoppingCart')}>
        <Icon style={{marginRight: 20}} name="shopping-cart" size={40} color="white" />
      </TouchableOpacity>
      <View
        style={{
          position: 'absolute',
          top: -5,
          right: 5,
          backgroundColor: 'red',
          borderRadius: 10,
          minWidth: 20,
          height: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: '#fff', fontSize: 12 }}>{productsSelected.length}</Text>
      </View>
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
    width: '100%',
  },
  text: {
    color: '#fff',
    fontSize: 18,
    marginTop: 12,
    marginLeft: 8,
  },
  iconCart: {
    marginRight: '20px'
  }
});
