import * as React from 'react';
import { DefaultTheme, RNTheme } from '../RNTheme'

const ThemeContext = React.createContext<RNTheme>(DefaultTheme);

export const useTheme = <T extends RNTheme>(): T => {
    const theme = React.useContext(ThemeContext);
    return theme as T;
}

export default ThemeContext