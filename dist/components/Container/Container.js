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
        {
            props.children;
        }
        <react_native_1.SafeAreaView {...viewProps}/>;
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
