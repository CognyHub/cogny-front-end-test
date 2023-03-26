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

      <View
        style={{
          position: 'absolute',
          right: 5,
          backgroundColor: 'red',
          borderRadius: 10,
          minWidth: 35,
          height: 25,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: '#fff', fontSize: 18 }}>{productsSelected.length}</Text>
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
    width: '100%',
    height: 90,
    marginTop: 60
  },
  text: {
    color: '#fff',
    fontSize: 18,
    marginTop: 12,
    marginLeft: 12,
  },
  iconCart: {
    marginRight: '20px'
  }
});
