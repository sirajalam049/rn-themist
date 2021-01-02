import * as React from "react";
import { NativeSyntheticEvent, NativeTouchEvent, StyleSheet, TouchableHighlight, TouchableOpacity, ViewStyle } from "react-native";
import { makeStyles, useTheme } from "../../styles";
import utils from "../../utils";

export interface CircularIconButtonProps {
    size?: 'small' | 'medium' | 'large'; // default medium
    onPress?: (event: NativeSyntheticEvent<NativeTouchEvent>) => void;
    elevation?: ViewStyle['elevation'],
    color?: 'primary' | 'secondary' | 'default';
    disabled?: boolean;
    disableRipple?: boolean;
    delayPressIn?: number;

    style?: ViewStyle

    //https://github.com/DefinitelyTyped/DefinitelyTyped/pull/33602
    children?: React.ReactNode;

}

const CircularIconButton: React.FC<CircularIconButtonProps> = (props) => {
    const { size = 'medium', color = 'default', elevation = 0, disableRipple = false,  delayPressIn = 200, style: styles = {}, disabled, onPress } = props;
    const style = useStyle();

    const { palette: { primary, secondary }, overrides: {button} } = useTheme();

    const sizeKey = `size${utils.capitalize(size)}` as keyof typeof style;
    const colorKey = `color${utils.capitalize(color)}` as keyof typeof style;
    // const backgroundKey = `background${utils.capitalize(background)}` as keyof typeof style;
    const elevationKey = `elevation${elevation}` as keyof typeof style;
    const disabledKey = `disabled${utils.capitalize(color)}` as keyof typeof style;
    const underlayColor = disableRipple ? 'transparent' : (color === 'primary' ? primary.light : secondary.light)

    const ButtonBase = color === 'default' ? TouchableOpacity : TouchableHighlight;

    return (
        <ButtonBase
            delayPressIn={delayPressIn}
            underlayColor={underlayColor}
            disabled={disabled}
            onPress={onPress}
            style={StyleSheet.flatten([
                style.root,
                style[sizeKey],
                style[elevationKey],
                // style[backgroundKey],
                style[colorKey],
                style[disabledKey],
                { ...(styles || {}) },
            ])} >
            {props.children || null}
        </ButtonBase>
    );
}

const useStyle = makeStyles((theme) => {

    const { palette: { primary, secondary } } = theme;

    return (StyleSheet.create({
        root: {
            zIndex: 1,
            elevation: 0,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0,
            paddingLeft: 0,
            paddingRight: 0,
            paddingBottom: 0,
            paddingTop: 0,
            paddingVertical: 0,
            paddingHorizontal: 0,
            shadowOpacity: 0.29,
            shadowColor: '#000',
            shadowRadius: 2,
        },
        sizeSmall: {
            height: 24,
            width: 24,
            borderRadius: 12
        },
        sizeMedium: {
            height: 32,
            width: 32,
            borderRadius: 16
        },
        sizeLarge: {
            height: 45,
            width: 45,
            borderRadius: 22.5
        },

        // backgroundLight: { backgroundColor: 'rgba(0, 0, 0, 0.3)', },
        // backgroundDark: { backgroundColor: 'rgba(0, 0, 0, 0.7)', },
        // backgroundTransparent: { backgroundColor: 'transparent', },
        // backgroundWhite: { backgroundColor: 'rgba(255, 255, 255, 1)' },
        // backgroundPrimary: { backgroundColor: primary.main },
        // backgroundSecondary: { backgroundColor: secondary.main },

        colorDefault: {
            backgroundColor: 'transparent'
        },
        colorPrimary: {
            backgroundColor: primary.main
        },
        colorSecondary: {
            backgroundColor: secondary.main
        },

        elevation0: {
            elevation: 0,
            shadowOpacity: 0,
        },
        elevation1: {
            elevation: 1,
            shadowOffset: { width: 0, height: 1, },
            marginBottom: 1
        },
        elevation2: {
            elevation: 2,
            shadowOffset: { width: 0, height: 2 },
            shadowColor: '#000',
            shadowRadius: 4,
        },
        elevation3: {
            elevation: 3,
            shadowOffset: { width: 0, height: 3 },
            shadowColor: '#000',
            shadowRadius: 6,
        },

        disabledPrimary: {
            backgroundColor: primary['light'],
        },
        disabledSecondary: {
            backgroundColor: secondary['light']
        }
    }))
})

export default React.memo(CircularIconButton);