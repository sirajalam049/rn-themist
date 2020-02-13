import * as React from "react";
import { NativeSyntheticEvent, NativeTouchEvent, StyleSheet, TouchableHighlight, StyleProp, ViewStyle, TouchableOpacity, Dimensions } from 'react-native';
import { PaperProps } from "../Paper";
import { useTheme } from "../../styles/ThemeContext";
import makeStyles from '../../styles/makeStyles';
// import s from '../../styles'
import Utils from "../../utils";

/**
 *  This component is supposed to be in the Rn-Themist.
 *  It will migrate soon.
 *  TO_DO
 */

export interface ButtonProps {
    variant?: 'text' | 'contained' | 'outlined';
    onPress?: (event: NativeSyntheticEvent<NativeTouchEvent>) => void;
    disabled?: boolean;
    size?: 'small' | 'medium' | 'large' | 'xLarge';
    elevation?: PaperProps['elevation'];
    color?: 'primary' | 'secondary';
    rounded?: 'none' | 'small' | 'medium' | 'full';
    // rounded?: 'none' | 'low' | 'intermediate' | 'full';
    style?: StyleProp<ViewStyle>
    fullWidth?: boolean;
    disableRipple?: boolean;
    delayPressIn?: number;
}

const Button: React.FC<ButtonProps> = (props) => {
    const style = useStyle();
    const { pallete: { primary, secondary }, elevations } = useTheme();
    const { children, disabled = false, onPress = () => { }, variant = 'text', color = 'primary', size = 'medium', rounded = 'none',
        style: styles = {}, fullWidth = false, disableRipple = false, delayPressIn = 200, elevation = 0
    } = props;

    const variantKey = `variant${Utils.capitalize(variant)}${Utils.capitalize(color)}` as keyof typeof style;
    const sizeKey = `size${Utils.capitalize(size)}` as keyof typeof style;
    const roundedKey = `rounded${Utils.capitalize(rounded)}` as keyof typeof style;
    // const elevationKey = `elevation${Utils.capitalize(elevation.toString())}` as keyof typeof style;
    // const fullRoundedKey = rounded === 'full' ? `rounded${Utils.capitalize(size)}` as keyof typeof style : null;
    const disabledKey = `disabled${Utils.capitalize(color)}` as keyof typeof style;
    const underlayColor = disableRipple ? 'transparent' : (variant === 'contained' ? (color === 'primary' ? primary.dark : secondary.dark) : (color === 'primary' ? primary.light : secondary.light))
    const ButtonBase = variant === 'contained' ? TouchableHighlight : TouchableOpacity;
    return (
        <ButtonBase
            underlayColor={underlayColor}
            onPress={disabled ? undefined : onPress}
            delayPressIn={delayPressIn}
            style={StyleSheet.flatten([
                style.root,
                style[sizeKey],
                style[variantKey],
                style[roundedKey],
                elevations[elevation],
                // style[elevationKey],
                // (fullRoundedKey ? style[fullRoundedKey] : {}),
                (fullWidth ? style.fullWidth : {}),
                (disabled ? style[disabledKey] : {}),
                styles
            ])}
        >
            {children}
        </ButtonBase>
    );
}

const useStyle = makeStyles((theme) => {

    const { pallete: { primary, secondary, text, grey } } = theme;

    return (StyleSheet.create({
        root: {
            justifyContent: 'center',
            alignItems: 'center'
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
            // height: 
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

        roundedNone: {
            borderRadius: 0
        },
        roundedSmall: {
            borderRadius: 4
        },
        roundedMedium: {
            borderRadius: 8
        },
        roundedFull: {
            borderRadius: 50
        },

        disabledPrimary: {
            // backgroundColor: grey[400],
            backgroundColor: primary['light'],
        },
        disabledSecondary: {
            backgroundColor: secondary['light']
        },
    }));
})

export default Button;