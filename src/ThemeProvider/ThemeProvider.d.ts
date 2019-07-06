import { Component } from 'react';
import { RNTheme } from '../RNTheme';
export interface ThemeProviderProps {
    theme: Partial<RNTheme>;
}
declare class ThemeProvider extends Component<ThemeProviderProps> {
    render(): JSX.Element;
}
export default ThemeProvider;
