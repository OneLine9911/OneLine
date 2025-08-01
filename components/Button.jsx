import { Pressable, StyleSheet, Text, View } from 'react-native';
import { theme } from '../constants/theme.js';
import { hp } from '../helpers/common.js';
import Loading from './Loading.jsx';

const Button = ({
    buttonStyles,
    textStyle,
    title = '',
    onPress = () => { },
    loading = false,
    hasShadow = true  // false
}) => {

    const shadowStyle = {
        shadowColor: theme.colors.dark,
        shadowOffset: {width: 0, height: 10},
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 4
    }

    if(loading) {
        return (
            <View style={[styles.button, buttonStyles, {backgroundColor: 'white'}]}>
                <Loading />
            </View>
        )
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
        fontWeight: theme.fonts.bold
    }
})