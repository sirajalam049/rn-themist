import { TextStyle } from 'react-native';
export declare type TypographyVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'button' | 'caption' | 'error' | 'overline';
export interface TypographyOptions extends Record<TypographyVariants, TextStyle> {
    fontFamily: TextStyle['fontFamily'];
    fontSize: TextStyle['fontSize'];
    fontWeight: TextStyle['fontWeight'];
    color: TextStyle['color'];
}
export declare type TypographyColors = 'primary' | 'secondary' | 'textPrimary' | 'textSecondary' | 'error' | 'success' | 'contrast';
