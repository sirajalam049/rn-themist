import React, { PureComponent } from 'react'
import { StyleSheet, Text } from 'react-native';
import { RNTheme, ThemeColors } from '../../RNTheme';
import withStyles, { WithStylesProps } from '../../withStyles';
import utils from '../../utils';

export type TypographyVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'button' | 'overline' | 'error'

export interface TypographyProps extends WithStylesProps<typeof STYLES> {
    align?: 'left' | 'right' | 'center' | 'justify'
    color?: ThemeColors
    gutterButtom?: boolean
    variant?: TypographyVariants
}

class Typography extends PureComponent<TypographyProps> {

    constructor(props: TypographyProps) {
        super(props);
    };

    render() {
        const { align = 'left', color = 'textPrimary', gutterButtom = false, variant = 'h1', styles, children } = this.props;
        const colorKey = `color${utils.capitalize(color)}` as keyof typeof styles;
        const alignKey = `align${utils.capitalize(align)}` as keyof typeof styles;
        const variantKey = `variant${utils.capitalize(variant)}` as keyof typeof styles;
        return (
            <Text
                style={StyleSheet.flatten([
                    styles[colorKey],
                    styles[alignKey],
                    styles[variantKey],
                    gutterButtom ? styles['gutterBottom'] : {}
                ])}
            >{children}</Text>
        )
    }
}
const STYLES = (theme: RNTheme) => StyleSheet.create({
    colorPrimary: {
        color: theme.Color.primary,
    },
    colorSecondary: {
        color: theme.Color.secondary,
    },
    colorTextPrimary: {
        color: theme.Color.textPrimary
    },
    colorTextSecondary: {
        color: theme.Color.textSecondary
    },
    colorContrast: {
        color: theme.Color.contrast
    },
    colorError: {
        color: theme.Color.error
    },
    colorSuccess: {
        color: theme.Color.success
    },
    gutterBottom: {
        paddingBottom: theme.Typography.gutterBottom
    },
    variantH1: {

    },
    variantH2: {

    },
    variantH3: {},
    variantH4: {},
    variantH5: {},
    variantH6: {},
    variantBody1: {},
    variantBody2: {},
    variantButton: {},
    variantCaption: {},
    variantError: {},
    variantOverline: {},
    variantSubtitle1: {},
    variantSubtitle2: {}
});

export default withStyles(STYLES)(Typography)