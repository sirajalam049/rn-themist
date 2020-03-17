"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const RNTheme_1 = require("../RNTheme");
exports.createTheme = (theme) => lodash_1.default.merge(RNTheme_1.DefaultTheme, theme);
exports.default = exports.createTheme;
