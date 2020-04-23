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
const Box_1 = __importDefault(require("../Box"));
const makeStyles_1 = __importDefault(require("../../styles/makeStyles"));
const ThemeContext_1 = require("../../styles/ThemeContext");
const Paper = (props) => {
    const style = useStyle();
    const theme = ThemeContext_1.useTheme();
    const { elevation = 1, style: styles, ...boxProps } = props;
    return (<Box_1.default style={react_native_1.StyleSheet.flatten([
        style.root,
        theme.elevations[elevation],
        { ...(styles || {}) },
    ])} {...boxProps}>
            {props.children}
        </Box_1.default>);
};
const useStyle = makeStyles_1.default((theme) => {
    return (react_native_1.StyleSheet.create({
        root: {
            backgroundColor: '#fff',
            borderRadius: 2,
            shadowOpacity: 0.29,
            shadowColor: '#000',
            shadowRadius: 2,
        }
    }));
});
exports.default = Paper;
