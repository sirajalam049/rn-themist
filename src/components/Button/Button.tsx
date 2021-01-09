import * as React from "react";
import { NativeSyntheticEvent, NativeTouchEvent, StyleSheet, TouchableHighlight, StyleProp, ViewStyle, TouchableOpacity, TouchableWithoutFeedback, GestureResponderEvent } from 'react-native';
import { PaperProps } from "../Paper";
import Utils from "../../utils";
import { useTheme, makeStyles } from "../../styles";

export interface ButtonProps {
    variant?: 'text' | 'contained' | 'outlined';
    onPress?: (event: NativeSyntheticEvent<NativeTouchEvent>) => void;
    disabled?: boolean;
    size?: 'small' | 'medium' | 'large' | 'xLarge';
    elevation?: PaperProps['elevation'];
    color?: 'primary' | 'secondary';
    rounded?: 'none' | 'low' | 'intermediate' | 'full';
    style?: StyleProp<ViewStyle>
    fullWidth?: boolean;
    disableRipple?: boolean;
    delayPressIn?: number;
    onLongPress?: (event: GestureResponderEvent) => void;

    //https://github.com/DefinitelyTyped/DefinitelyTyped/pull/33602
    children?: React.ReactNode
}

const Button: React.FC<ButtonProps> = (props) => {

    const style = useButtonStyle();
    const { palette: { primary, secondary }, overrides: {button} } = useTheme();
    const { children, disabled = false, onPress = () => { }, variant = 'text', color = 'primary', size = 'medium', rounded = 'none',
        style: styles = {}, fullWidth = false, disableRipple = false, delayPressIn = 200, onLongPress
    } = props;

    const variantKey = `variant${Utils.capitalize(variant)}${Utils.capitalize(color)}` as keyof typeof style;
    const sizeKey = `size${Utils.capitalize(size)}` as keyof typeof style;
    const roundedKey = `rounded${Utils.capitalize(rounded)}` as keyof typeof style;
    const fullRoundedKey = rounded === 'full' ? `rounded${Utils.capitalize(size)}` as keyof typeof style : null;
    const disabledKey = `disabled${Utils.capitalize(color)}${Utils.capitalize(variant)}` as keyof typeof style;
    const underlayColor = disableRipple ? 'transparent' : (variant === 'contained' ? (color === 'primary' ? primary.dark : secondary.dark) : (color === 'primary' ? primary.light : secondary.light))
    const ButtonBase = variant === 'contained' ? TouchableHighlight : TouchableOpacity;
    return (
        <ButtonBase
            underlayColor={underlayColor}
            onPress={disabled ? undefined : onPress}
            onLongPress={disabled ? undefined : onLongPress}
            delayPressIn={delayPressIn}
            style={StyleSheet.flatten([
                style.root,
                {...style[sizeKey], ...button[sizeKey]},
                style[variantKey],
                style[roundedKey],
                (fullRoundedKey ? style[fullRoundedKey] : {}),
                (fullWidth ? style.fullWidth : {}),
                (disabled ? style[disabledKey] : {}),
                styles,
            ])}
        >
            {children}
        </ButtonBase>
    );
}

export const useButtonStyle = makeStyles((theme) => {

    const { palette: { primary, secondary, text, grey }, overrides } = theme;

    return (StyleSheet.create({
        root: {
            justifyContent: 'center',
            alignItems: 'center',
        },

        fullWidth: {
            width: '100%'
        },

        variantContainedPrimary: {
            backgroundColor: primary.main,
        },
        variantOutlinedPrimary: {
            borderWidth: 1,
            borderColor: primary.main,
        },
        variantOutlinedSecondary: {
            borderWidth: 1,
            borderColor: secondary.main,
        },
        variantOutlined: {
            borderWidth: 1,
            borderColor: text.primary
        },
        variantContainedSecondary: {
            backgroundColor: secondary.main
        },

        variantTextPrimary: {
            backgroundColor: 'transparent',
            paddingHorizontal: 0
        },

        sizeSmall: {
            paddingHorizontal: 16
        },
        sizeMedium: {
            height: 34,
            paddingHorizontal: 20
        },
        sizeLarge: {
            height: 45,
        },
        sizeXLarge: {
            height: 80
        },

        roundedSmall: {
            // borderRadius: 16
        },
        roundedMedium: {
            borderRadius: 17
        },
        roundedLarge: {
            borderRadius: 20
        },

        disabledPrimaryContained: {
            backgroundColor: primary['light'],
        },
        disabledSecondaryContained: {
            backgroundColor: secondary['light']
        }
    }));
})

export default React.memo(Button);