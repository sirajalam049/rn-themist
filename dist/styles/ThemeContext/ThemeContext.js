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
const RNTheme_1 = require("../RNTheme");
const ThemeContext = React.createContext(RNTheme_1.DefaultTheme);
exports.useTheme = () => {
    const theme = React.useContext(ThemeContext);
    return theme;
};
exports.default = ThemeContext;
