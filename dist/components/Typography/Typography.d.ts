import * as React from 'react';
import { TextProps } from 'react-native';
import { TypographyColors, TypographyVariants, GutterVariants } from '../../styles';
export interface TypographyProps extends TextProps {
    align?: 'left' | 'right' | 'center' | 'justify';
    color?: TypographyColors;
    gutterBottom?: keyof GutterVariants;
    variant?: TypographyVariants;
    children?: React.ReactNode;
}
declare const _default: React.NamedExoticComponent<TypographyProps>;
export default _default;
