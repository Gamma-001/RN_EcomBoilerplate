import React from 'react'
import 'react-native-gesture-handler';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { StatusBar, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation/RootNavigators';
import store, { persistor } from './src/services/redux/store';
import COLORS from './src/shared/colors';

export default function App(): JSX.Element {
    return (
        <>
            <StatusBar backgroundColor = { COLORS.BG_PRIMARY } barStyle = 'dark-content' />
            <SafeAreaView style = {{ flex: 1, backgroundColor: COLORS.BG_PRIMARY }}>
            <Provider store={ store }>
            <PersistGate persistor = { persistor } loading = { null }>
                <NavigationContainer>
                    <RootNavigator />
                </NavigationContainer>
            </PersistGate>
            </Provider>
            </SafeAreaView>
        </>
    );
};