import React, { Component } from 'react';
import { RNTheme } from '../RNTheme';
import ThemeContext from '../ThemeContext';

export interface ThemeProviderProps {
    theme: Partial<RNTheme>
}

class ThemeProvider extends Component<ThemeProviderProps> {
    render() {
        return (
            <ThemeContext.Provider value={this.props.theme} >
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

export default ThemeProvider;