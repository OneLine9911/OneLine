import { BlurView } from 'expo-blur';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BlurPageInput = () => {
    const text = 'Hello, my container is blurring contents underneath!';

    return (
        <View style={styles.container}>
            {/* Background with boxes */}
            <View style={styles.background}>
                {[...Array(20).keys()].map(i => (
                    <View
                        key={`box-${i}`}
                        style={[
                            styles.box,
                            i % 2 === 1 ? styles.boxOdd : styles.boxEven,
                        ]}
                    />
                ))}
            </View>

            {/* BlurView on top of background */}
            <BlurView
                intensity={100}
                style={styles.blurContainer}
                experimentalBlurMethod="blur" // For Android
            >
                <Text style={styles.text}>{text}</Text>
            </BlurView>

            {/* Another blur effect with light tint */}
            <BlurView intensity={80} tint="light" style={styles.blurContainer}>
                <Text style={styles.text}>{text}</Text>
            </BlurView>

            {/* Darker blur effect */}
            <BlurView intensity={90} tint="dark" style={styles.blurContainer}>
                <Text style={[styles.text, { color: '#fff' }]}>{text}</Text>
            </BlurView>
        </View>
    );
}

export default BlurPageInput

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    blurContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        //padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        //borderRadius: 20,
        overflow: 'hidden',
    },
    background: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center', // Align boxes in the center
        padding: 10,
        marginTop: 40, // Ensure it's not overlapped by the blur view
    },
    box: {
        width: '25%',
        height: 100,
        margin: 4,
    },
    boxEven: {
        backgroundColor: 'orangered',
    },
    boxOdd: {
        backgroundColor: 'gold',
    },
    text: {
        fontSize: 24,
        fontWeight: '600',
        textAlign: 'center',
    },
});
