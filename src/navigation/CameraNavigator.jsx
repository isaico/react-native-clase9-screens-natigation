import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CameraScreen } from '../screens/index.js';
const Stack = createNativeStackNavigator();

const CameraNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Camera">
            <Stack.Screen name="Camera" component={CameraScreen} />
        </Stack.Navigator>
    );
};

export default CameraNavigator;
