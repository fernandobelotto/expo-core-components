import React from 'react';
import { Image, PixelRatio, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const size = 50;
const cat = require('../logo.jpg')

export default function PixelRatioAPI() {

    return (
        <>
            <SafeAreaView>
                {/* <View style={styles.container}>
                    <Text>Current Pixel Ratio is:</Text>
                    <Text style={styles.value}>{PixelRatio.get()}</Text>
                </View>
                <View style={styles.container}>
                    <Text>Current Font Scale is:</Text>
                    <Text style={styles.value}>{PixelRatio.getFontScale()}</Text>
                </View>
                <View style={styles.container}>
                    <Text>On this device images with a layout width of</Text>
                    <Text style={styles.value}>{size} px</Text>
                    <Image
                        style={{
                            width: size,
                            height: size,
                        }}
                        source={cat} />
                </View>
                <View style={styles.container}>
                    <Text>require images with a pixel width of</Text>
                    <Text style={styles.value}>{PixelRatio.getPixelSizeForLayoutSize(size)} px</Text>
                    <Image
                        source={cat}
                        style={{
                            width: PixelRatio.getPixelSizeForLayoutSize(size),
                            height: PixelRatio.getPixelSizeForLayoutSize(size),
                        }}
                    />
                </View> */}

                <Image
                    style={{
                        width: size,
                        height: size,
                    }}
                    source={cat} />
            </SafeAreaView>
        </>
    )
}


const styles = StyleSheet.create({
    scrollContainer: {
        flext: 1,
        marginTop: 2,
        justifyContent: 'center',
    },
    container: {
        alignItems: 'center',
    },
    value: {
        fontSize: 24,
        marginBottom: 12,
        marginTop: 4,
    },
});