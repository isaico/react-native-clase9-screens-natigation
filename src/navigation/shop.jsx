import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import {
    CategoriesScreen,
    ProductScreen,
    ProductsScreen,
} from '../screens/index';

const Stack = createNativeStackNavigator()

const ShopNavigator =()=>{
    return (
        <Stack.Navigator>
            <Stack.Screen name="Categories" component={CategoriesScreen} />
            <Stack.Screen name="Products" component={ProductsScreen} />
            <Stack.Screen name="Product" component={ProductScreen} />
        </Stack.Navigator>
    )
}
export default ShopNavigator