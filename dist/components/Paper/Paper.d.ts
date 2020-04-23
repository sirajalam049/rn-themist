import * as React from "react";
import { ViewStyle } from "react-native";
import { BoxProps } from "../Box";
import { ElevationVariant } from "../../styles";
export interface PaperProps extends Omit<BoxProps, 'elevation' | 'style'> {
    elevation?: ElevationVariant;
    style?: ViewStyle;
}
declare const Paper: React.FC<PaperProps>;
export default Paper;
