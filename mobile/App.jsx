import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Products from './src/screens/Products';
import Cart from './src/screens/Cart';
import Provider from './src/Context/Provider';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Products" component={Products} />
          <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
