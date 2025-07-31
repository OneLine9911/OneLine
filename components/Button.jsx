import { Pressable, StyleSheet, Text } from 'react-native';
import { theme } from '../constants/theme.js';
import { hp } from '../helpers/common.js';

const Button = (
    buttonStyles,
    textStyle,
    title = "",
    onPress = () => { },
    loading = false,
    hasShadow = false
) => {

    const shadowStyle = {

    }

    return (
        <Pressable onPress={onPress}
            style={[styles.button, buttonStyles, hasShadow && shadowStyle]}>
            <Text style={[styles.text, textStyle]}>{title}</Text>
        </Pressable>
    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        backgroundColor: theme.colors.primary,
        height: hp(6.6),
        justifyContent: 'center',
        alignItems: 'center',
        borderCurve: 'continuous',
        borderRadius: theme.radius.xl
    },
    text: {
        fontSize: hp(2.5),
        color: 'white',
        
    }
})