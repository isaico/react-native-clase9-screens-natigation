import React from 'react';
import IoniIcons from '@expo/vector-icons/Ionicons';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {colors} from '../constants/colors.js'
import { StyleSheet } from 'react-native';
import ShopNavigator from './ShopNavigator';
import CartNavigator from './CartNavigator';

const BottomTab = createBottomTabNavigator();

const styles = StyleSheet.create({
    tabBarIcon: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabBarText: {
       
        fontSize: 14,
        color: colors.text,
    },
    tabBarTextFocused: {
        
        fontSize: 14,
        color: colors.text,
    },
});

const TabsNavigator = () => {
    return (
        <BottomTab.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <BottomTab.Screen
                name="ShopTab"
                component={ShopNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabBarIcon}>
                            <IoniIcons
                                name={focused ? 'home' : 'home-outline'}
                                size={20}
                                color={colors.primary}
                            />
                            <Text
                                style={
                                    focused
                                        ? styles.tabBarTextFocused
                                        : styles.tabBarText
                                }
                            >
                                Shop
                            </Text>
                        </View>
                    ),
                }}
            />
            <BottomTab.Screen
                name="CartTab"
                component={CartNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabBarIcon}>
                            <IoniIcons
                                name={focused ? 'cart' : 'cart-outline'}
                                size={20}
                                color={colors.primary}
                            />
                            <Text
                                style={
                                    focused
                                        ? styles.tabBarTextFocused
                                        : styles.tabBarText
                                }
                            >
                                Cart
                            </Text>
                        </View>
                    ),
                    tabBarShowLabel: false,
                }}
            />
        </BottomTab.Navigator>
    );
};



export default TabsNavigator;
