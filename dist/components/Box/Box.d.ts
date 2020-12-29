import * as React from 'react';
import { ViewStyle, ViewProps } from 'react-native';
export interface BoxProps extends ViewStyle {
    m?: number;
    mx?: number;
    my?: number;
    ml?: number;
    mr?: number;
    mt?: number;
    mb?: number;
    p?: number;
    px?: number;
    py?: number;
    pl?: number;
    pr?: number;
    pt?: number;
    pb?: number;
    bgColor?: string;
    bw?: number;
    bc?: string;
    blc?: string;
    brc?: string;
    br?: number;
    style?: ViewStyle;
    viewProps?: ViewProps;
    children?: React.ReactNode;
}
declare const _default: React.NamedExoticComponent<BoxProps>;
export default _default;
