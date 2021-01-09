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
exports.ThemeProvider = void 0;
const React = __importStar(require("react"));
const ThemeContext_1 = __importDefault(require("../ThemeContext"));
const ActionSheet_1 = __importDefault(require("../../components/ActionSheet"));
const OverlayLoader_1 = __importDefault(require("../../components/OverlayLoader"));
const ThemeProvider = (props) => {
    return (<ThemeContext_1.default.Provider value={props.theme}>
            {props.children}
            <ActionSheet_1.default ref={(r) => {
        ActionSheet_1.default.actionSheetInstance = r;
    }}/>
            <OverlayLoader_1.default ref={(r) => {
        OverlayLoader_1.default.overlayLoaderInstance = r;
    }}/>
        </ThemeContext_1.default.Provider>);
};
exports.ThemeProvider = ThemeProvider;
exports.default = exports.ThemeProvider;
