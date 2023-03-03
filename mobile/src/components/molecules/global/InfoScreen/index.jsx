import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function InfoScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container} >
      <Text style={{color: 'white', fontSize: 18}}>Seu carrinho está vazio !</Text>

      <TouchableOpacity
        style={styles.touchabled}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.button}>VOLTAR</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 60,
  },
  button: {
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
  touchabled: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 16,
    padding: 8,
  }
});

