import React from "react-native";
import Products from '../pages/Products';
import Cart from "../pages/Cart";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const ProductNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Products" screenOptions={{ headerShown: false}}>
      <Stack.Screen name="Products" component={Products}></Stack.Screen>
      <Stack.Screen name="Cart" component={Cart}></Stack.Screen>
    </Stack.Navigator>
  );
}

export default ProductNavigation;