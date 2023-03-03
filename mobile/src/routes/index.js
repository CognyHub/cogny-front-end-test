import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import ShoppingCart from '../pages/ShoppingCart';
import PurchaseMade from '../pages/PurchaseMade';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />

      <Stack.Screen 
        name="ShoppingCart"
        component={ShoppingCart}
        options={{ headerShown: false }}
      />

      <Stack.Screen 
        name="Purchasemade"
        component={PurchaseMade}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}