import * as React from "react";
import { NativeSyntheticEvent, NativeTouchEvent, StyleProp, ViewStyle } from 'react-native';
import { PaperProps } from "../Paper";
export interface ButtonProps {
    variant?: 'text' | 'contained' | 'outlined';
    onPress?: (event: NativeSyntheticEvent<NativeTouchEvent>) => void;
    disabled?: boolean;
    size?: 'small' | 'medium' | 'large' | 'xLarge';
    elevation?: PaperProps['elevation'];
    color?: 'primary' | 'secondary';
    rounded?: 'none' | 'low' | 'intermediate' | 'full';
    style?: StyleProp<ViewStyle>;
    fullWidth?: boolean;
    disableRipple?: boolean;
    delayPressIn?: number;
    children?: React.ReactNode;
}
export declare const useButtonStyle: import("../../styles").StylesHook<{
    root: {
        justifyContent: "center";
        alignItems: "center";
    };
    fullWidth: {
        width: string;
    };
    variantContainedPrimary: {
        backgroundColor: string;
    };
    variantOutlinedPrimary: {
        borderWidth: number;
        borderColor: string;
    };
    variantOutlinedSecondary: {
        borderWidth: number;
        borderColor: string;
    };
    variantOutlined: {
        borderWidth: number;
        borderColor: string;
    };
    variantContainedSecondary: {
        backgroundColor: string;
    };
    variantTextPrimary: {
        backgroundColor: string;
        paddingHorizontal: number;
    };
    sizeSmall: {};
    sizeMedium: {
        height: number;
        paddingHorizontal: number;
    };
    sizeLarge: {
        height: number;
    };
    sizeXLarge: {
        height: number;
    };
    roundedSmall: {};
    roundedMedium: {
        borderRadius: number;
    };
    roundedLarge: {
        borderRadius: number;
    };
    disabledPrimary: {
        backgroundColor: string;
    };
    disabledSecondary: {
        backgroundColor: string;
    };
}>;
declare const _default: React.NamedExoticComponent<ButtonProps>;
export default _default;
