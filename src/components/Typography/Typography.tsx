import * as React from 'react'
import { StyleSheet, Text, TextProps } from 'react-native';
import utils from '../../utils';
import { makeStyles } from '../../styles';
import { TypographyColors, TypographyVariants, GutterVariants } from '../../styles';

export interface TypographyProps extends TextProps {
    align?: 'left' | 'right' | 'center' | 'justify';
    color?: TypographyColors;
    gutterBottom?: keyof GutterVariants;
    variant?: TypographyVariants;

    //https://github.com/DefinitelyTyped/DefinitelyTyped/pull/33602
    children?: React.ReactNode
}


const Typography: React.FC<TypographyProps> = (props) => {

    const { align = 'left', color = '', gutterBottom: gutterBottom = '', variant = 'body2', children, style, ...textProps } = props;

    const styles = useStyle();

    const colorKey = (color && `color${utils.capitalize(color)}`) as keyof typeof styles;
    const alignKey = `align${utils.capitalize(align)}` as keyof typeof styles;
    const gutterKey = (gutterBottom && `gutterBottom${utils.capitalize(gutterBottom)}`) as keyof typeof styles;
    const variantKey = `variant${utils.capitalize(variant)}` as keyof typeof styles;

    return (
        <Text
            style={StyleSheet.flatten([
                styles.root,
                styles[variantKey],
                styles[colorKey],
                styles[alignKey],
                (gutterBottom ? styles[gutterKey] : {}),
                style
            ])}
            {...textProps}
        >{children}</Text>
    )
}



const useStyle = makeStyles((theme) => {

    const color = theme.palette;
    const gutter = theme.gutters.typography;
    const tg = theme.typography;

    return (StyleSheet.create({

        root: {
            fontSize: tg.fontSize,
            fontFamily: tg.fontFamily,
            lineHeight: tg.fontSize,
            color: tg.color,
            fontWeight: tg.fontWeight
        },

        variantH1: {
            ...tg.h1
        },
        variantH2: {
            ...tg.h2
        },
        variantH3: {
            ...tg.h3
        },
        variantH4: {
            ...tg.h4
        },
        variantH5: {
            ...tg.h5
        },
        variantH6: {
            ...tg.h6
        },
        variantBody1: {
            ...tg.body1
        },
        variantBody2: {
            ...tg.body2
        },
        variantSubtitle1: {
            ...tg.subtitle1
        },
        variantSubtitle2: {
            ...tg.subtitle2
        },
        variantError: {
            ...tg.error,
        },
        variantButton: {
            ...tg.button
        },
        variantCaption: {
            ...tg.caption
        },
        variantOverline: {
            ...tg.overline
        },

        colorPrimary: {
            color: color.primary.main,
        },
        colorSecondary: {
            color: color.secondary.main,
        },
        colorTextPrimary: {
            color: color.text.primary
        },
        colorTextSecondary: {
            color: color.text.secondary
        },
        colorContrast: {
            color: color.contrast.main
        },
        colorError: {
            color: color.error.main
        },
        colorSuccess: {
            color: color.success.main
        },

        alignLeft: {
            textAlign: 'left'
        },
        alignRight: {
            textAlign: 'right'
        },
        alignCenter: {
            textAlign: 'center'
        },
        alignJustify: {
            textAlign: 'justify'
        },

        gutterBottomLow: {
            marginBottom: gutter.low
        },
        gutterBottomMedium: {
            marginBottom: gutter.medium
        },
        gutterBottomHigh: {
            marginBottom: gutter.high
        },
    }))
});

export default React.memo(Typography);