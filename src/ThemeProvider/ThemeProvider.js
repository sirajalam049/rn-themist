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
const react_1 = __importStar(require("react"));
const ThemeContext_1 = __importDefault(require("../ThemeContext"));
class ThemeProvider extends react_1.Component {
    render() {
        return (react_1.default.createElement(ThemeContext_1.default.Provider, { value: this.props.theme }, this.props.children));
    }
}
exports.default = ThemeProvider;
