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
exports.useButtonStyle = void 0;
const React = __importStar(require("react"));
const react_native_1 = require("react-native");
const utils_1 = __importDefault(require("../../utils"));
const styles_1 = require("../../styles");
const Button = (props) => {
    const style = exports.useButtonStyle();
    const { palette: { primary, secondary }, overrides: { button } } = styles_1.useTheme();
    const { children, disabled = false, onPress = () => { }, variant = 'text', color = 'primary', size = 'medium', rounded = 'none', style: styles = {}, fullWidth = false, disableRipple = false, delayPressIn = 200 } = props;
    const variantKey = `variant${utils_1.default.capitalize(variant)}${utils_1.default.capitalize(color)}`;
    const sizeKey = `size${utils_1.default.capitalize(size)}`;
    const roundedKey = `rounded${utils_1.default.capitalize(rounded)}`;
    const fullRoundedKey = rounded === 'full' ? `rounded${utils_1.default.capitalize(size)}` : null;
    const disabledKey = `disabled${utils_1.default.capitalize(color)}`;
    const underlayColor = disableRipple ? 'transparent' : (variant === 'contained' ? (color === 'primary' ? primary.dark : secondary.dark) : (color === 'primary' ? primary.light : secondary.light));
    const ButtonBase = variant === 'contained' ? react_native_1.TouchableHighlight : react_native_1.TouchableOpacity;
    return (<ButtonBase underlayColor={underlayColor} onPress={disabled ? undefined : onPress} delayPressIn={delayPressIn} style={react_native_1.StyleSheet.flatten([
        style.root,
        { ...style[sizeKey], ...button[sizeKey] },
        style[variantKey],
        style[roundedKey],
        (fullRoundedKey ? style[fullRoundedKey] : {}),
        (fullWidth ? style.fullWidth : {}),
        (disabled ? style[disabledKey] : {}),
        styles,
    ])}>
            {children}
        </ButtonBase>);
};
exports.useButtonStyle = styles_1.makeStyles((theme) => {
    const { palette: { primary, secondary, text, grey }, overrides } = theme;
    return (react_native_1.StyleSheet.create({
        root: {
            justifyContent: 'center',
            alignItems: 'center',
        },
        fullWidth: {
            width: '100%'
        },
        variantContainedPrimary: {
            backgroundColor: primary.main,
        },
        variantOutlinedPrimary: {
            borderWidth: 1,
            borderColor: primary.main,
        },
        variantOutlinedSecondary: {
            borderWidth: 1,
            borderColor: secondary.main,
        },
        variantOutlined: {
            borderWidth: 1,
            borderColor: text.primary
        },
        variantContainedSecondary: {
            backgroundColor: secondary.main
        },
        variantTextPrimary: {
            backgroundColor: 'transparent',
            paddingHorizontal: 0
        },
        sizeSmall: {
        // height: 
        },
        sizeMedium: {
            height: 34,
            paddingHorizontal: 20
        },
        sizeLarge: {
            height: 45,
        },
        sizeXLarge: {
            height: 80
        },
        roundedSmall: {
        // borderRadius: 16
        },
        roundedMedium: {
            borderRadius: 17
        },
        roundedLarge: {
            borderRadius: 20
        },
        disabledPrimary: {
            // backgroundColor: grey[400],
            backgroundColor: primary['light'],
        },
        disabledSecondary: {
            backgroundColor: secondary['light']
        }
    }));
});
exports.default = React.memo(Button);
