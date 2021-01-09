import * as React from 'react';
import ThemeContext from '../ThemeContext';
import { RNTheme } from '../RNTheme';
import ActionSheet from '../../components/ActionSheet';

export interface ThemeProviderProps {
    theme: RNTheme
}

export const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
    return (
        <ThemeContext.Provider value={props.theme} >
            {props.children}
            <ActionSheet
                ref={(x) => {
                    ActionSheet.actionSheetInstance = x as ActionSheet;
                }}
            />
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;