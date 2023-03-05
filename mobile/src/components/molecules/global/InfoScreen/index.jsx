import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function InfoScreen({ text }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container} >
      <Text style={{color: 'black', fontSize: 18}}>{text}</Text>

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
    backgroundColor: 'white',
    margin: 36,
    borderRadius: 4,
    padding: 12
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

