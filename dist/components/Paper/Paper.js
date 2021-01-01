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
const Box_1 = __importDefault(require("../Box"));
const React = __importStar(require("react"));
const react_native_1 = require("react-native");
const styles_1 = require("../../styles");
const Paper = (props) => {
    const style = useStyle();
    const { elevation = 1, style: styles, ...boxProps } = props;
    const elevationKey = `elevation${elevation}`;
    return (<Box_1.default style={react_native_1.StyleSheet.flatten([
        style.root,
        style[elevationKey],
        { ...(styles || {}) },
    ])} {...boxProps}>
            {props.children}
        </Box_1.default>);
};
const useStyle = styles_1.makeStyles((theme) => {
    return (react_native_1.StyleSheet.create({
        root: {
            backgroundColor: '#fff',
            borderRadius: 2,
            shadowOpacity: 0.29,
            shadowColor: '#000',
            shadowRadius: 2,
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
        }
    }));
});
exports.default = React.memo(Paper);
