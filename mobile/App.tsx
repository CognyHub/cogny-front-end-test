import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider, StatusBar } from 'native-base';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import Header from './src/components/Header';
import { CartProvider } from './src/context/CartProvider';
import CartScreen from './src/screens/Cart';
import HomeScreen from './src/screens/Home';
import { THEME } from './src/styles/theme';

const Stack = createNativeStackNavigator();

function App({ navigation }) {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <NativeBaseProvider theme={THEME}>
        <CartProvider>
          <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent
          />
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerTitle: () => <Header />,
              headerStyle: {
                backgroundColor: '#141419',
              },
              headerBackVisible: false,
              headerLeft: () => <></>,
            }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Cart" component={CartScreen} />
          </Stack.Navigator>
        </CartProvider>
      </NativeBaseProvider>
      <Toast />
    </NavigationContainer>
  );
}
export default App;
