"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_native_1 = require("react-native");
const ThemeContext_1 = require("../../styles/ThemeContext");
const makeStyles_1 = __importDefault(require("../../styles/makeStyles"));
// import s from '../../styles'
const utils_1 = __importDefault(require("../../utils"));
const Button = (props) => {
    const style = useStyle();
    const { pallete: { primary, secondary }, elevations } = ThemeContext_1.useTheme();
    const { children, disabled = false, onPress = () => { }, variant = 'text', color = 'primary', size = 'medium', rounded = 'none', style: styles = {}, fullWidth = false, disableRipple = false, delayPressIn = 200, elevation = 0 } = props;
    const variantKey = `variant${utils_1.default.capitalize(variant)}${utils_1.default.capitalize(color)}`;
    const sizeKey = `size${utils_1.default.capitalize(size)}`;
    const roundedKey = `rounded${utils_1.default.capitalize(rounded)}`;
    // const elevationKey = `elevation${Utils.capitalize(elevation.toString())}` as keyof typeof style;
    // const fullRoundedKey = rounded === 'full' ? `rounded${Utils.capitalize(size)}` as keyof typeof style : null;
    const disabledKey = `disabled${utils_1.default.capitalize(color)}`;
    const underlayColor = disableRipple ? 'transparent' : (variant === 'contained' ? (color === 'primary' ? primary.dark : secondary.dark) : (color === 'primary' ? primary.light : secondary.light));
    const ButtonBase = variant === 'contained' ? react_native_1.TouchableHighlight : react_native_1.TouchableOpacity;
    return (<ButtonBase underlayColor={underlayColor} onPress={disabled ? undefined : onPress} delayPressIn={delayPressIn} style={react_native_1.StyleSheet.flatten([
        style.root,
        style[sizeKey],
        style[variantKey],
        style[roundedKey],
        elevations[elevation],
        // style[elevationKey],
        // (fullRoundedKey ? style[fullRoundedKey] : {}),
        (fullWidth ? style.fullWidth : {}),
        (disabled ? style[disabledKey] : {}),
        styles
    ])}>
            {children}
        </ButtonBase>);
};
const useStyle = makeStyles_1.default((theme) => {
    const { pallete: { primary, secondary, text, grey } } = theme;
    return (react_native_1.StyleSheet.create({
        root: {
            justifyContent: 'center',
            alignItems: 'center'
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
        roundedNone: {
            borderRadius: 0
        },
        roundedSmall: {
            borderRadius: 4
        },
        roundedMedium: {
            borderRadius: 8
        },
        roundedFull: {
            borderRadius: 50
        },
        disabledPrimary: {
            // backgroundColor: grey[400],
            backgroundColor: primary['light'],
        },
        disabledSecondary: {
            backgroundColor: secondary['light']
        },
    }));
});
exports.default = Button;
