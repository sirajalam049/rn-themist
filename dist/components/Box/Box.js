"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
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
