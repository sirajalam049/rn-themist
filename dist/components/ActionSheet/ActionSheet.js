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
const Button_1 = __importDefault(require("../Button"));
const Typography_1 = __importDefault(require("../Typography"));
class ActionSheet extends React.Component {
    constructor(props) {
        super(props);
        this.hideActionSheet = () => {
            this.setState({ isVisible: false });
            if (typeof this.state.config.cancelButtonIndex === 'number')
                this.state.callback?.(this.state.config.cancelButtonIndex);
        };
        this.showActionSheet = (config, cb) => {
            if (react_native_1.Platform.OS === 'ios')
                react_native_1.ActionSheetIOS.showActionSheetWithOptions(config, cb);
            else
                this.setState({ config, isVisible: true, callback: cb });
        };
        this.onItemPress = (index) => {
            const { callback } = this.state;
            if (callback) {
                callback(index);
            }
            this.setState({ isVisible: false });
        };
        this.state = {
            isVisible: false,
            config: {},
            callback: undefined
        };
    }
    render() {
        const { cancelButtonIndex, options = [] } = this.state.config;
        return (<react_native_1.Modal transparent visible={this.state.isVisible} animationType={'slide'} onRequestClose={this.hideActionSheet}>
				<react_native_1.TouchableOpacity style={STYLES.root} onPress={this.hideActionSheet}/>
				<Box_1.default style={STYLES.container}>
					{options.map((o, i) => {
            return (<Button_1.default style={STYLES.button} key={i} onPress={(e) => this.onItemPress(i)}>
								<Typography_1.default color={i === cancelButtonIndex ? 'error' : undefined} style={STYLES.option}>
									{o}
								</Typography_1.default>
							</Button_1.default>);
        })}
				</Box_1.default>
			</react_native_1.Modal>);
    }
}
ActionSheet.show = (config, cb = () => { }) => {
    ActionSheet.actionSheetInstance.showActionSheet(config, cb);
};
ActionSheet.hide = () => {
    ActionSheet.actionSheetInstance.hideActionSheet();
};
const STYLES = react_native_1.StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#000',
        opacity: 0.7,
    },
    container: {
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: 30,
        opacity: 1,
    },
    option: {
        fontSize: 14,
    },
    button: {
        height: 56,
        alignItems: 'flex-start',
    },
});
exports.default = ActionSheet;
