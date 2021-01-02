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
const styles_1 = require("../../styles");
const utils_1 = __importDefault(require("../../utils"));
const CircularIconButton = (props) => {
    const { size = 'medium', color = 'default', elevation = 0, disableRipple = false, delayPressIn = 200, style: styles = {}, disabled, onPress } = props;
    const style = useStyle();
    const { palette: { primary, secondary }, overrides: { button } } = styles_1.useTheme();
    const sizeKey = `size${utils_1.default.capitalize(size)}`;
    const colorKey = `color${utils_1.default.capitalize(color)}`;
    // const backgroundKey = `background${utils.capitalize(background)}` as keyof typeof style;
    const elevationKey = `elevation${elevation}`;
    const disabledKey = `disabled${utils_1.default.capitalize(color)}`;
    const underlayColor = disableRipple ? 'transparent' : (color === 'primary' ? primary.light : secondary.light);
    const ButtonBase = color === 'default' ? react_native_1.TouchableOpacity : react_native_1.TouchableHighlight;
    return (<ButtonBase delayPressIn={delayPressIn} underlayColor={underlayColor} disabled={disabled} onPress={onPress} style={react_native_1.StyleSheet.flatten([
        style.root,
        style[sizeKey],
        style[elevationKey],
        // style[backgroundKey],
        style[colorKey],
        style[disabledKey],
        { ...(styles || {}) },
    ])}>
            {props.children || null}
        </ButtonBase>);
};
const useStyle = styles_1.makeStyles((theme) => {
    const { palette: { primary, secondary } } = theme;
    return (react_native_1.StyleSheet.create({
        root: {
            zIndex: 1,
            elevation: 0,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0,
            paddingLeft: 0,
            paddingRight: 0,
            paddingBottom: 0,
            paddingTop: 0,
            paddingVertical: 0,
            paddingHorizontal: 0,
            shadowOpacity: 0.29,
            shadowColor: '#000',
            shadowRadius: 2,
        },
        sizeSmall: {
            height: 24,
            width: 24,
            borderRadius: 12
        },
        sizeMedium: {
            height: 32,
            width: 32,
            borderRadius: 16
        },
        sizeLarge: {
            height: 45,
            width: 45,
            borderRadius: 22.5
        },
        // backgroundLight: { backgroundColor: 'rgba(0, 0, 0, 0.3)', },
        // backgroundDark: { backgroundColor: 'rgba(0, 0, 0, 0.7)', },
        // backgroundTransparent: { backgroundColor: 'transparent', },
        // backgroundWhite: { backgroundColor: 'rgba(255, 255, 255, 1)' },
        // backgroundPrimary: { backgroundColor: primary.main },
        // backgroundSecondary: { backgroundColor: secondary.main },
        colorDefault: {
            backgroundColor: 'transparent'
        },
        colorPrimary: {
            backgroundColor: primary.main
        },
        colorSecondary: {
            backgroundColor: secondary.main
        },
        elevation0: {
            elevation: 0,
            shadowOpacity: 0,
        },
        elevation1: {
            elevation: 1,
            shadowOffset: { width: 0, height: 1, },
            marginBottom: 1
        },
        elevation2: {
            elevation: 2,
            shadowOffset: { width: 0, height: 2 },
            shadowColor: '#000',
            shadowRadius: 4,
        },
        elevation3: {
            elevation: 3,
            shadowOffset: { width: 0, height: 3 },
            shadowColor: '#000',
            shadowRadius: 6,
        },
        disabledPrimary: {
            backgroundColor: primary['light'],
        },
        disabledSecondary: {
            backgroundColor: secondary['light']
        }
    }));
});
exports.default = React.memo(CircularIconButton);
