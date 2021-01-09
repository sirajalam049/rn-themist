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
const Box_1 = __importDefault(require("../Box"));
class OverlayLoader extends React.Component {
    constructor(props) {
        super(props);
        this.showLoader = () => this.setState({ isVisible: true });
        this.hideLoader = () => this.setState({ isVisible: false });
        this.state = {
            isVisible: false,
        };
    }
    render() {
        return this.state.isVisible ? (<Box_1.default style={STYLES.root}>
				<react_native_1.ActivityIndicator />
			</Box_1.default>) : null;
    }
}
OverlayLoader.withLoader = async (cb) => {
    try {
        OverlayLoader.overlayLoaderInstance.showLoader();
        const res = await cb();
        return res;
    }
    catch (error) {
        throw new Error(error);
    }
    finally {
        OverlayLoader.overlayLoaderInstance.hideLoader();
    }
};
const STYLES = react_native_1.StyleSheet.create({
    root: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: `rgba(0, 0, 0, .7)`,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
exports.default = OverlayLoader;
