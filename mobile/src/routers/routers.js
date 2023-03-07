import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Header from "../components/Header";
import CartProvider from "../context/CartProvider";

const Stack = createStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <CartProvider>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{header: () => <Header />}}
                />
                <Stack.Screen
                    name="Cart"
                    component={ Cart }
                    options={{header: () => <Header />}}
                />
            </Stack.Navigator>
            </CartProvider>
        </NavigationContainer>
    )
}

export default Routes