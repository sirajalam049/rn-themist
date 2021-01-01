import { ButtonProps } from "../../components/Button";
import * as React from "react";
import { ViewStyle } from "react-native";
export interface CircularIconButtonProps extends ButtonProps {
    size?: 'small' | 'medium' | 'large';
    background?: 'dark' | 'light' | 'transparent' | 'white' | 'primary' | 'secondary';
    elevation?: ViewStyle['elevation'];
    children?: React.ReactNode;
}
declare const _default: React.NamedExoticComponent<CircularIconButtonProps>;
export default _default;
