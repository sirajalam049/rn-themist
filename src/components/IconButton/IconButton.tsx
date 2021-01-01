import Button, { ButtonProps } from "../../components/Button";
import * as React from "react";
import { StyleSheet, ViewStyle } from "react-native";
import { makeStyles } from "../../styles";
import utils from "../../utils";

export interface CircularIconButtonProps extends ButtonProps {
    size?: 'small' | 'medium' | 'large'; // default medium
    background?: 'dark' | 'light' | 'transparent' | 'white' | 'primary' | 'secondary';
    elevation?: ViewStyle['elevation'],

    //https://github.com/DefinitelyTyped/DefinitelyTyped/pull/33602
    children?: React.ReactNode
}

const CircularIconButton: React.FC<CircularIconButtonProps> = (props) => {
    const { size = 'medium', color = '#fff', background = 'light', elevation = 0, ...buttonProps } = props;
    const style = useStyle();
    const sizeKey = `size${utils.capitalize(size)}` as keyof typeof style;
    const backgroundKey = `background${utils.capitalize(background)}` as keyof typeof style;
    const elevationKey = `elevation${elevation}` as keyof typeof style;

    const iconSize = size === 'medium' ? 30 : (size === 'small' ? 24 : 45);

    return (
        <Button style={StyleSheet.flatten([style.root, style[sizeKey], style[elevationKey], style[backgroundKey]])} {...buttonProps}  >
            {props.children}
        </Button>
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
            height: 30,
            width: 30,
            borderRadius: 15
        },
        sizeLarge: {

        },

        backgroundLight: { backgroundColor: 'rgba(0, 0, 0, 0.3)', },
        backgroundDark: { backgroundColor: 'rgba(0, 0, 0, 0.7)', },
        backgroundTransparent: { backgroundColor: 'transparent', },
        backgroundWhite: { backgroundColor: 'rgba(255, 255, 255, 1)' },
        backgroundPrimary: { backgroundColor: primary.main },
        backgroundSecondary: { backgroundColor: secondary.main },

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
        }
    }))
})

export default React.memo(CircularIconButton);