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
const styles_1 = require("../../styles");
const Container = (props) => {
    const { flex = true, bottomOnly = false, topOnly = false, ...viewProps } = props;
    const styles = useStyle();
    if (topOnly) {
        return (<>
                <react_native_1.SafeAreaView {...viewProps}/>
                {props.children}
            </>);
    }
    if (bottomOnly) {
        return (<>
                {props.children}
                <react_native_1.SafeAreaView {...viewProps}/>
            </>);
    }
    return (<react_native_1.SafeAreaView {...viewProps} style={react_native_1.StyleSheet.flatten([
        ...(flex ? [styles.flex] : []),
        viewProps.style
    ])}>
            {props.children}
        </react_native_1.SafeAreaView>);
};
const useStyle = styles_1.makeStyles((theme) => {
    return (react_native_1.StyleSheet.create({
        flex: {
            flex: 1
        }
    }));
});
exports.default = React.memo(Container);
