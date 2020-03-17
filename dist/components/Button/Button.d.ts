import * as React from "react";
import { NativeSyntheticEvent, NativeTouchEvent, StyleProp, ViewStyle } from 'react-native';
import { PaperProps } from "../Paper";
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
    style?: StyleProp<ViewStyle>;
    fullWidth?: boolean;
    disableRipple?: boolean;
    delayPressIn?: number;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
