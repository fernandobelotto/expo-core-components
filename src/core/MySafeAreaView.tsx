import React from 'react';
import {
    StyleSheet,
    Text,
    // SafeAreaView não use essa, use a react-native-safe-area-context!
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

export default function MySafeAreaView() {
    return (
        <>
            <SafeAreaView style={styles.container}>
                <Text>Page content</Text>
            </SafeAreaView>
        </>
    )
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});