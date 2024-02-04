import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/public/Home';

const Stack = createStackNavigator();

export default function RootNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}/>
        </Stack.Navigator>
    );
}