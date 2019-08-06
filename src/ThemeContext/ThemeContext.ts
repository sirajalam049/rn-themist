import React from 'react';
import { RNTheme } from '..';

const ThemeContext = React.createContext<RNTheme>({});

export const useTheme = <T extends RNTheme>(): T => {
    const theme = React.useContext(ThemeContext);
    return theme as T;
}

export default ThemeContext