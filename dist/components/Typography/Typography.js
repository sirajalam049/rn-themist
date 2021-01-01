"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_native_1 = require("react-native");
const utils_1 = __importDefault(require("../../utils"));
const styles_1 = require("../../styles");
const Typography = (props) => {
    const { align = 'left', color = '', gutterBottom: gutterBottom = '', variant = 'body2', children, style, ...textProps } = props;
    const styles = useStyle();
    const colorKey = (color && `color${utils_1.default.capitalize(color)}`);
    const alignKey = `align${utils_1.default.capitalize(align)}`;
    const gutterKey = (gutterBottom && `gutterBottom${utils_1.default.capitalize(gutterBottom)}`);
    const variantKey = `variant${utils_1.default.capitalize(variant)}`;
    return (<react_native_1.Text style={react_native_1.StyleSheet.flatten([
        styles.root,
        styles[variantKey],
        styles[colorKey],
        styles[alignKey],
        (gutterBottom ? styles[gutterKey] : {}),
        style
    ])} {...textProps}>{children}</react_native_1.Text>);
};
const useStyle = styles_1.makeStyles((theme) => {
    const color = theme.palette;
    const gutter = theme.gutters.typography;
    const tg = theme.typography;
    return (react_native_1.StyleSheet.create({
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
    }));
});
exports.default = React.memo(Typography);
