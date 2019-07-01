import React from 'react';
import DefaultTheme, { RNTheme } from '../RNTheme';

const ThemeContext = React.createContext<Partial<RNTheme>>(DefaultTheme);

export default ThemeContext