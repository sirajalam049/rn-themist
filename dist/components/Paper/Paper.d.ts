import { BoxProps } from "../Box";
import * as React from "react";
import { ViewStyle } from "react-native";
export interface PaperProps extends Omit<BoxProps, 'elevation' | 'style'> {
    elevation?: ViewStyle['elevation'];
    style?: ViewStyle;
}
declare const _default: React.NamedExoticComponent<PaperProps>;
export default _default;
