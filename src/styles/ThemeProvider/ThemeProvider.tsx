import React from 'react';
import ThemeContext from '../ThemeContext';
import { RNTheme } from '../RNTheme';

export interface ThemeProviderProps {
    theme: RNTheme
}

export const ThemeProvider: React.SFC<ThemeProviderProps> = (props) => {
    return (
        <ThemeContext.Provider value={props.theme} >
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;