import ProductList from './src/pages/ProductList';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Cart from './src/pages/Cart';
import { ShoesProvider } from './src/contexts/shoesContext';
import { CartProvider } from './src/contexts/cartContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <ShoesProvider>
        <CartProvider>
          <Stack.Navigator initialRouteName="ProductList" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="ProductList" component={ProductList} />
            <Stack.Screen name="Cart" component={Cart} />
          </Stack.Navigator>
        </CartProvider>
      </ShoesProvider>
    </NavigationContainer>
  );
}

