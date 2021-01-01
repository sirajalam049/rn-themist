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
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_native_1 = require("react-native");
const Box = (props) => {
    let { pb, bgColor, br, px, p, py, pl, pt, bw, m, mt, ml, mr, mb, my, mx, bc, style = {}, viewProps, children, ...viewStyle } = props;
    return (<react_native_1.View style={{
        paddingBottom: pb,
        paddingLeft: pl,
        paddingTop: pt,
        paddingHorizontal: px,
        paddingVertical: py,
        padding: p,
        borderRadius: br,
        borderColor: bc,
        backgroundColor: bgColor,
        margin: m,
        marginTop: mt,
        marginLeft: ml,
        marginRight: mr,
        marginBottom: mb,
        marginVertical: my,
        marginHorizontal: mx,
        borderWidth: bw,
        ...viewStyle,
        ...style
    }} {...(viewProps || {})}>
            {children}
        </react_native_1.View>);
};
const styles = react_native_1.StyleSheet.create({});
exports.default = React.memo(Box);
