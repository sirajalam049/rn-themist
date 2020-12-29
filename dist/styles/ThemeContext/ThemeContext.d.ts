import * as React from 'react';
import { RNTheme } from '../RNTheme';
declare const ThemeContext: React.Context<RNTheme>;
export declare const useTheme: <T extends RNTheme>() => T;
export default ThemeContext;
