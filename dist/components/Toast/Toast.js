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
const Button_1 = __importDefault(require("../Button"));
const Typography_1 = __importDefault(require("../Typography"));
const Box_1 = __importDefault(require("../Box"));
class Toast extends React.Component {
    constructor(props) {
        super(props);
        this.containerTranslateAnimation = new react_native_1.Animated.Value(64);
        this.containerOpacityAnimation = new react_native_1.Animated.Value(0);
        this.showSuccessToast = (config) => {
            this.setState({ isVisible: true, toastConfig: config, variant: 'default' });
            react_native_1.Animated.parallel([
                react_native_1.Animated.timing(this.containerOpacityAnimation, {
                    toValue: 1,
                    duration: 200,
                    useNativeDriver: true,
                }),
                react_native_1.Animated.timing(this.containerTranslateAnimation, {
                    toValue: 0,
                    duration: 200,
                    useNativeDriver: true,
                }),
            ]).start();
            if (this.timeout) {
                clearTimeout(this.timeout);
            }
            this.timeout = setTimeout(() => {
                this.hideToast();
            }, 3000);
        };
        this.hideToast = () => {
            react_native_1.Animated.parallel([
                react_native_1.Animated.timing(this.containerOpacityAnimation, {
                    toValue: 0,
                    duration: 200,
                    useNativeDriver: true,
                }),
                react_native_1.Animated.timing(this.containerTranslateAnimation, {
                    toValue: 64,
                    duration: 200,
                    useNativeDriver: true,
                }),
            ]).start(() => {
                this.setState({ isVisible: false });
            });
        };
        this.showErrorToast = (config) => {
            react_native_1.Alert.alert('Error', config?.errorToastMessage, [], { cancelable: true });
        };
        this.state = {
            isVisible: false,
            toastConfig: {
                successToastMessage: '',
                successToastTitle: 'Success',
                errorToastMessage: '',
                fallbackError: 'Error',
                showApiErrorMsg: true,
                showSuccessMessage: false,
            },
            variant: 'default',
        };
    }
    render() {
        const { toastConfig, isVisible } = this.state;
        return isVisible ? (<react_native_1.Animated.View style={react_native_1.StyleSheet.flatten([
            {
                opacity: this.containerOpacityAnimation,
                transform: [{ translateY: this.containerTranslateAnimation }],
            },
            styles.root,
        ])}>
				<Box_1.default flex={1} mr={50}>
					<Typography_1.default variant={'body2'} color={'contrast'}>
						{toastConfig?.successToastMessage || ''}
					</Typography_1.default>
				</Box_1.default>
				<Button_1.default onPress={this.hideToast}>
					<Typography_1.default color={'secondary'}>CLOSE</Typography_1.default>
				</Button_1.default>
			</react_native_1.Animated.View>) : null;
    }
}
Toast.withToast = async (cb, config) => {
    try {
        const res = await cb();
        const msg = config?.successToastMessage || 'Success';
        Toast.toastInstance.showSuccessToast({ ...config, successToastMessage: msg });
        return res;
    }
    catch (error) {
        const msg = config?.showApiErrorMsg === false
            ? config.errorToastMessage || 'Error'
            : error?.response?.data?.error?.message || error.message;
        Toast.toastInstance.showErrorToast({ ...config, errorToastMessage: msg });
    }
};
const styles = react_native_1.StyleSheet.create({
    root: {
        minHeight: 48,
        paddingVertical: 16,
        width: react_native_1.Dimensions.get('window').width * 0.9,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        position: 'absolute',
        bottom: react_native_1.Dimensions.get('window').width * 0.05,
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        zIndex: 9999,
        alignSelf: 'center',
        borderRadius: 6,
    },
    variantError: {},
});
exports.default = Toast;
