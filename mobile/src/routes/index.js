import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import ShoppingCart from '../pages/ShoppingCart';
import PurchaseMade from '../pages/PurchaseMade';
import { TransitionSpecs } from '@react-navigation/stack';

const Stack = createStackNavigator();

const fadeTransition = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  cardStyleInterpolator: ({ current }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  }),
};

export default function Routes() {
  return (
      <Stack.Navigator screenOptions={{
        headerShown: false,
        ...fadeTransition,
      }}>
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