import React from 'react';
import ThemeContext from '../ThemeContext';
import { RNTheme } from '..';

export interface ThemeProviderProps {
    theme: any
}

const ThemeProvider: React.SFC<ThemeProviderProps> = (props) => {
    return (
        <ThemeContext.Provider value={props.theme} >
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;