import * as React from "react";
import { NativeSyntheticEvent, NativeTouchEvent, ViewStyle } from "react-native";
export interface CircularIconButtonProps {
    size?: 'small' | 'medium' | 'large';
    onPress?: (event: NativeSyntheticEvent<NativeTouchEvent>) => void;
    elevation?: ViewStyle['elevation'];
    color?: 'primary' | 'secondary' | 'default';
    disabled?: boolean;
    disableRipple?: boolean;
    delayPressIn?: number;
    style?: ViewStyle;
    children?: React.ReactNode;
}
declare const _default: React.NamedExoticComponent<CircularIconButtonProps>;
export default _default;
