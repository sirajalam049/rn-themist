import { TypographyVariants } from "./components/Typography/Typography";
import { StyleProp, TextStyle } from "react-native";

export type ThemeColors = 'primary' | 'secondary' | 'textPrimary' | 'textSecondary' | 'contrast' | 'error' | 'success' | 'primaryAccent' | 'secondaryAccent'

export interface RNTheme {
    Color: Record<ThemeColors, string>,
    Typography: {
        variant: Record<TypographyVariants, StyleProp<TextStyle>>,
        gutterBottom: number
    }

}

const DefaultTheme: RNTheme = {
    Color: {
        primary: '#344955',
        secondary: '#F9AA33',
        textPrimary: '#5A5A5A',
        textSecondary: '#5E6368',
        contrast: '#FFFFF',
        error: '',
        success: '',
        get primaryAccent(): string {
            return this.primary
        },
        get secondaryAccent(): string {
            return this.secondary
        }
    },
    Typography: {
        variant: {
            h1: {},
            h2: {},
            h3: {},
            h4: {},
            h5: {},
            h6: {},
            body1: {},
            body2: {},
            button: {},
            caption: {},
            error: {},
            overline: {},
            subtitle1: {},
            subtitle2: {}
        },
        gutterBottom: 20
    }
}

export default DefaultTheme;