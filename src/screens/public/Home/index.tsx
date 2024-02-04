import React from 'react';

import { View, Text } from 'react-native';
import styles from './style';

export default function HomeScreen() {
    return (
        <View style = { styles.root }>
            <Text style = { styles.textMain }> Home Screen </Text>
        </View>
    );
}